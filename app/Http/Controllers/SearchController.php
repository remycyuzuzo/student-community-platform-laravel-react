<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        if (!$request->has('k')) {
            return [];
        }
        $keyword = $request->k;
        $users = [];
        $communities = [];
        $posts = [];

        if ($keyword != "") {
            $users = DB::table('users')
                ->where('first_name', 'LIKE', "%{$keyword}%")
                ->orWhere('middle_name', 'LIKE', "%{$keyword}%")
                ->orWhere('last_name', 'LIKE', "%{$keyword}%")
                ->get()->toArray();

            $communities = DB::table('communities')->where('name', 'LIKE', "%{$keyword}%")->get()->toArray();
            $posts = DB::table('community_posts')->where('post_texts', 'LIKE', "%{$keyword}%")->get()->toArray();
        }

        return Inertia::render('search/SearchResults', [
            'users' => $users,
            'communities' => $communities,
            'posts' => $posts,
            'keyword' => $keyword,
        ]);
    }
}
