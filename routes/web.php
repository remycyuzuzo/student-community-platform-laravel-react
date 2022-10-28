<?php

use App\Http\Controllers\Admin\AdminDashboardController;
use App\Http\Controllers\Admin\AdminLoginController;
use App\Http\Controllers\AdminManageUsersController;
use App\Http\Controllers\AdminSchoolsController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;





use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\CommunityController;
use App\Http\Controllers\CommunityPostController;
use App\Http\Controllers\DiscoverController;
use App\Http\Controllers\HomePageController;
use App\Http\Controllers\InterestController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\SearchController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/sign-up', [UserController::class, 'create']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/', [HomePageController::class, 'renderHomePage'])->middleware(['auth', 'verified']);
Route::get('/discover', [DiscoverController::class, 'render'])->middleware(['auth', 'verified']);
Route::get('/schools', [HomePageController::class, 'renderHomePage'])->middleware(['auth', 'verified']);

Route::get('/new-community', [CommunityController::class, 'create'])->name('new-community')->middleware('auth');
Route::post('/new-community', [CommunityController::class, 'store'])->middleware('auth');

Route::get('/c/{communityId}', [CommunityController::class, 'communityView'])->middleware(['auth', 'verified']);
// search interests
Route::get('/interest/search', [InterestController::class, 'filter'])->middleware(['auth', 'verified']);

Route::post('/join-community', [CommunityController::class, 'join'])->middleware(['auth', 'verified']);
Route::post('/leave-community', [CommunityController::class, 'leave'])->middleware(['auth', 'verified']);

Route::get('/get/my-communities', [CommunityController::class, 'myCommunitiesGet'])->middleware('auth');

Route::get('/search', [SearchController::class, 'search'])->name('search')->middleware('auth');

Route::get('/u/{user_name}', [UserController::class, 'showUserProfile'])->middleware('auth')->name('profile');

Route::post('/new-post', [CommunityPostController::class, 'store'])->name('new-post')->middleware(['auth', 'verified']);
Route::get('/get/posts/{communityId}', [CommunityPostController::class, 'allPost'])->name('allPost')->middleware(['auth', 'verified']);

Route::get('/get/allCommunitiesPosts', [HomePageController::class, 'getPosts'])->name('allCommunitiesPosts')->middleware('auth');

Route::get('/get/userPosts/{userId}', [HomePageController::class, 'getPosts'])->name('showUserProfile')->middleware('auth');

Route::get('/messages', [MessageController::class, 'getAllConversations'])->name('messages')->middleware('auth');
Route::get('/messages/conversation/{conversationToken}', [MessageController::class, 'getConversation'])->name('conversation');
Route::get('/chat/{userName}', [MessageController::class, 'messageRouter'])->name('messageRouter')->middleware('auth');

Route::post('/chat/send-message/{conversationToken}', [MessageController::class, 'sendMessage'])->name('sendMessage')->middleware(['auth', 'verified']);
Route::get('/get/chat/messages/{conversationToken}', [MessageController::class, 'getConversationMessage'])->name('getConversationMessage')->middleware('auth');

Route::get('/admin/', [AdminDashboardController::class, 'render']);
Route::get('/admin/login', [AdminLoginController::class, 'render'])->name('adminLogin');
Route::post('/admin/login', [AdminLoginController::class, 'login']);

Route::get('/admin/users', [AdminManageUsersController::class, 'all'])->name('manageUsers');
Route::get('/admin/users/new', [AdminManageUsersController::class, 'create'])->name('newUser');
Route::post('/admin/users/new', [AdminManageUsersController::class, 'store']);

Route::get('/admin/schools', [AdminSchoolsController::class, 'all'])->name('allSchools');
Route::get('/admin/schools/new', [AdminSchoolsController::class, 'create'])->name('newSchool');
Route::post('/admin/schools/new', [AdminSchoolsController::class, 'store']);




Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.update');
});

Route::middleware('auth')->group(function () {
    Route::get('verify-email', [EmailVerificationPromptController::class, '__invoke'])
        ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});





require __DIR__ . '/auth.php';
