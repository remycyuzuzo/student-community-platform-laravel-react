<?php

namespace App\Http\Controllers;

use App\Models\Community;
use App\Models\CommunityMember;
use App\Models\CommunityPost;
use Illuminate\Http\Request;

class CommunityPostController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'post_texts' => 'required',
            'communityId' => 'required'
        ]);

        $newPost = CommunityPost::create([
            'community_id' => $request->communityId,
            'user_id' => auth()->user()->id,
            'post_texts' => $request->post_texts,
        ]);

        $communityInfo = Community::all()->where('id', '=', $request->communityId)->first();
        if ($newPost) {
            return redirect("/c/{$communityInfo->unique_id}")->with('success', 'The new post updated successfully');
        } else {
            return redirect("/c/{$communityInfo->unique_id}")->with('fail', 'failed to post this message');
        }
    }

    public function allPost($communityId)
    {
        $community = Community::all()->where('unique_id', '=', $communityId)->first();
        if (!$community) {
            return abort(404);
        }
        $posts = CommunityPost::all()->where('community_id', '=', $community->id)->load(['user', 'community', 'reactions'])->toArray();

        return $posts;
    }


    public function getPosts($userId)
    {
        $user_communities = CommunityMember::all()->where('user_id', '=', $userId);
        $arr_user_communities = [];
        $i = 0;
        foreach ($user_communities as $community) {
            $arr_user_communities[$i] = $community['community_id'];
            $i++;
        }

        $posts = CommunityPost::all()->whereIn('community_id', $arr_user_communities)->load(['user', 'community'])->toArray();

        return $posts;
    }
}
