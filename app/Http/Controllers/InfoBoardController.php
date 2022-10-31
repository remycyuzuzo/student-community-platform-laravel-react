<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InfoBoardController extends Controller
{
    public function create()
    {
        return view('admin.posts.new_post');
    }


    public function store(Request $request)
    {
        $request->validate([
            'thumb' => 'required',
            'title' => 'required',
            'content' => 'required',
            'category' => 'required'
        ]);
    }


    public function all()
    {
        return view('admin.posts.all_posts');
    }
}
