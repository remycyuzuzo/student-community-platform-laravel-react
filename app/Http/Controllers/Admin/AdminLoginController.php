<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AdminLoginController extends Controller
{

    public function render()
    {
        return view('admin.login');
    }


    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if ($request->has('remember_me')) {
            $remember = true;
        } else
            $remember = false;

        $email = $request->email;

        // dd($email, $password);

        if (auth()->attempt([
            'email' => $request->email,
            'password' => $request->password,
        ], $remember)) {
            $user = User::all()->where('email', '=', $request->email)->first();
            if ($user->role == "student") {
                return redirect('/')->with('welcome', "Welcome ");
            }
            return redirect('/admin/')->with('welcome', "Welcome ");
        } else {
            return back()->with('error', __('Email address or password is incorrect'));
        }
    }
}
