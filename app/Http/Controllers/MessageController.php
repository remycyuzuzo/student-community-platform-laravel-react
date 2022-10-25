<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\ConversationParticipants;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function getAllConversations()
    {
        $userId = auth()->user()->id;
        $userMessages = ConversationParticipants::all()->where('user_id', '=', $userId)->load(['user', 'conversation']);
        return Inertia::render('messages/Messages', [
            'userMessages' => $userMessages
        ]);
    }

    public function getConversation($conversationId)
    {
    }

    public function messageRouter($userName)
    {
        $user = User::all()->where('username', '=', $userName)->first();
        $current_user_id = auth()->user()->id;

        $userConversation = Conversation::all()
            ->where('user_id', '=', $current_user_id);

        if (!$userConversation) {
            $conversationInstance = Conversation::create([]);
        }
    }
}
