<?php

namespace App\Http\Controllers;

use App\Models\CommunityMember;
use App\Models\CommunityPost;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomePageController extends Controller
{
    public function renderHomePage()
    {

        return Inertia::render('Feed', [
            'auth' => auth()->user(),
        ]);
    }

    public function getPosts()
    {
        $user_communities = CommunityMember::all()->where('user_id', '=', auth()->user()->id)->toArray();
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
