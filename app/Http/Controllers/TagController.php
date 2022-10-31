<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TagController extends Controller
{
    public function all(Request $request)
    {
        if ($request->name == "") {
            return [];
        }
        $tags = DB::table('tags')->where('name', 'LIKE', "%{$request->name}%")->get();

        return $tags->toJson();
    }
}
