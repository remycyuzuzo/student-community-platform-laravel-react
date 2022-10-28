<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class AdminManageUsersController extends Controller
{
    public function all()
    {
        $users = User::all()->where('id', '!=', auth()->user()->id);
        return view('admin.users.all_users', [
            'users' => $users,
        ]);
    }


    public function create(Request $request)
    {
        return view('admin.users.new_user');
    }


    public function store(Request $request)
    {
        $request->validate([
            'fname' => 'required|string|max:255',
            'lname' => 'string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed'],
            'role' => 'required'
        ]);

        $user = User::create([
            'first_name' => $request->fname,
            'last_name' => $request->lname,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'username' => uniqid(),
            'bio' => '',
            'profile_pic' => '',
            'google_id' => '',
            'facebook_id' => '',
            'github_id' => '',
            'user_level' => '',
            'user_status' => 1,
            'role' => $request->role,
        ]);

        return redirect(route('manageUsers'))->with('success', 'user created');
    }


    public function destroy($userId)
    {
        if (!$this->getUserInfo($userId)) {
            return back()->with('error', 'user not found');
        }

        $delete = User::where('id', $userId)->delete();
        return back()->with('success', 'user deleted');
    }


    public function disable($userId)
    {
        $user = $this->getUserInfo($userId);
        if (!$user) {
            return back()->with('error', 'user not found');
        }
        if ($user->user_status) {
            User::where('id', $userId)->update(['user_status' => 0]);
            return redirect(route('manageUsers'))->with('success', 'user disabled, they won\'t be able to login ');
        } else {
            User::where('id', $userId)->update(['user_status' => 1]);
            return redirect(route('manageUsers'))->with('success', 'user enabled ');
        }
    }


    private function getUserInfo($userId)
    {
        return User::all()->where('id', '=', $userId)->first();
    }
}
