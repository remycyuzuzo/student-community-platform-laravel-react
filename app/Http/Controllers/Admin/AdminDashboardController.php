<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Community;
use App\Models\InfoBoard;
use App\Models\School;
use App\Models\User;
use Illuminate\Http\Request;

class AdminDashboardController extends Controller
{
    public function render()
    {
        $users = User::all()->count();
        $schools = School::all()->count();
        $communities = Community::all()->count();
        $infoBoards = InfoBoard::all()->count();

        return view('admin.home', [
            'users' => $users,
            'communities' => $communities,
            'schools' => $schools,
            'infoBoard' => $infoBoards,
        ]);
    }
}
