<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\File;
use Illuminate\Auth\Events\Registered;
use App\Providers\RouteServiceProvider;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'fname' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'gender' => ['required'],
            'profilePic' => File::types(['jpg', 'png', 'jitf', 'gif', 'webm'])
                ->max(3 * 1024),
        ]);

        if ($request->file('profilePic')) {
            $file = $request->file('profilePic');
            $fileName = time() . '_' . uniqid() . $file->getClientOriginalName();
            $filePath = $request->file('profilePic')->storeAs('uploads/student_profiles', $fileName, 'public');
        }

        $user = User::create([
            'first_name' => $request->fname,
            'last_name' => $request->lastName,
            'email' => $request->email,
            'gender' => $request->gender,
            'dob_day' => $request->day,
            'dob_month' => $request->month,
            'dob_year' => $request->year,
            'password' => Hash::make($request->password),
            'username' => uniqid(),
            'google_id' => '',
            'facebook_id' => '',
            'github_id' => '',
            'user_level' => '',
            'bio' => '',
            'profile_pic' => $filePath,
            'user_status' => 1,
            'role' => 'student',
        ]);


        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
