<?php

namespace App\Http\Controllers;

use App\Models\InfoBoard;
use App\Models\InfoBoardTag;
use App\Models\Tag;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules\File;
use Inertia\Inertia;

class InfoBoardController extends Controller
{

    public function renderPosts()
    {
        $posts = InfoBoard::all()->where('status', '!=', 0)->load(['tags', 'user']);
        return Inertia::render('InfoBoard/InfoBoard', [
            'posts' => $posts
        ]);
    }


    public function singleBlogPage($postId)
    {
        $post = InfoBoard::all()->where('id', '=', $postId)->load(['user'])->first();
        if (!$post) {
            return abort(404);
        }
        return Inertia::render('InfoBoard/SingleBlogPage', [
            'post' => $post
        ]);
    }


    // ADMINISTRATOR
    public function create()
    {
        return view('admin.posts.new_post');
    }


    public function store(Request $request)
    {
        $request->validate([
            'thumb' => File::types(['jpg', 'png', 'jitf', 'gif', 'webm'])
                ->max(3 * 1024),
            'title' => 'required',
            'content' => 'required',
            'category' => 'required',
        ]);

        $filePath = null;
        if ($request->file('thumb')) {
            $file = $request->file('thumb');
            $fileName = time() . '_' . uniqid() . $file->getClientOriginalName();
            $filePath = $request->file('thumb')->storeAs('uploads/thumbnail', $fileName, 'public');
        }
        $new_post = InfoBoard::create([
            'title' => $request->title,
            'body' => $request->content,
            'category' => $request->category,
            'status' => 1,
            'user_id' => auth()->user()->id,
            'thumb' => $filePath
        ]);

        if ($request->has('tags') && is_array($request->tags)) {
            foreach ($request->tags as  $tag) {
                $tagInfo = Tag::all()->where('name', '=', $tag)->first();
                $tag_id = null;
                if (!$tagInfo) {
                    if (is_numeric($tag)) {
                        $tag_id = $tag;
                    } else {
                        $tagInfo = Tag::create(['name' => $tag, 'desc' => '']);
                        $tag_id = $tagInfo->id;
                    }
                } else $tag_id = $tagInfo->id;
                InfoBoardTag::create([
                    'tag_id' => $tag_id,
                    'info_board_id' => $new_post->id
                ]);
            }
        }
        return redirect(route('managePosts'))->with('success', 'new post created');
    }


    public function all()
    {
        $posts = InfoBoard::all()->load(['tags', 'user']);
        return view('admin.posts.all_posts', [
            'posts' => $posts
        ]);
    }


    public function edit(Request $request, $infoBoardId)
    {
        $post = InfoBoard::all()->where('id', '=', $infoBoardId)->load('tags')->first();

        return view('admin.posts.update_post', [
            'post' => $post,
        ]);
    }


    public function update(Request $request, $infoBoardId)
    {

        $request->validate([
            'thumb' => File::types(['jpg', 'png', 'jitf', 'gif', 'webm'])
                ->max(3 * 1024),
            'title' => 'required',
            'content' => 'required',
            'category' => 'required',
        ]);

        $filePath = null;
        if ($request->file('thumb')) {
            $file = $request->file('thumb');
            $fileName = time() . '_' . uniqid() . $file->getClientOriginalName();
            $filePath = $request->file('thumb')->storeAs('uploads/thumbnail', $fileName, 'public');
        }
        $data = [
            'title' => $request->title,
            'body' => $request->content,
            'category' => $request->category,
            'status' => 1,
            'user_id' => auth()->user()->id,
        ];
        if ($filePath) {
            $data['thumb'] = $filePath;
        }
        $new_post = InfoBoard::where('id', $infoBoardId)->update($data);

        return redirect(route('managePosts'))->with('success', 'new post created');
    }


    public function destroy(Request $request, $infoBoardId)
    {
        $post = $this->getPostInfo($infoBoardId);
        if (!$post) {
            return back()->with('error', 'post not found');
        }

        $delete = InfoBoard::where('id', $infoBoardId)->delete();
        if ($post->thumb != null) {
            try {
                unlink(config((public_path("storage/{$post->thumb}"))));
            } catch (Exception $e) {
                //throw $th;
            }
        }
        return redirect(route('managePosts'))->with('success', 'post deleted');
    }


    public function unPublish($infoBoardId)
    {
        $post = $this->getPostInfo($infoBoardId);
        if (!$post) {
            return back()->with('error', 'post not found');
        }
        if ($post->status) {
            InfoBoard::where('id', $infoBoardId)->update(['status' => 0]);
            return redirect(route('managePosts'))->with('success', 'this post is unpublished, it won\'t be visible to other users ');
        } else {
            InfoBoard::where('id', $infoBoardId)->update(['status' => 1]);
            return redirect(route('managePosts'))->with('success', 'This post is now live ');
        }
    }


    public function getPostInfo($infoBoardId)
    {
        return InfoBoard::all()->where('id', '=', $infoBoardId)->first();
    }
}
