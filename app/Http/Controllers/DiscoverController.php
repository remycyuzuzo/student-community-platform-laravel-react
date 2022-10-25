<?php

namespace App\Http\Controllers;

use App\Models\Community;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DiscoverController extends Controller
{
    public function render()
    {
        $communities = Community::all();

        return Inertia::render('discover/Discover', [
            'communities' => $communities
        ]);
    }
}
