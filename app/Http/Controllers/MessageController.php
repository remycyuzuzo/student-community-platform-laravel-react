<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\ConversationParticipants;
use App\Models\Message;
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

    public function getConversation($conversationToken)
    {
        $conversation = Conversation::all()->where('token', '=', $conversationToken)->first();
        if (!$conversation) {
            return back()->with('conversation not found');
        }
        $participantOne = null;
        foreach ($conversation->participants as $participant) {
            if ($participant->user->id == auth()->user()->id) {
                continue;
            }
            $participantOne = $participant->user;
        }

        return Inertia::render('messages/chatPage', [
            'conversationToken' => $conversationToken,
            'participantOne' => $participantOne
        ]);
    }

    public function getConversationMessage($conversationToken)
    {
        $messages = Message::all()->where('conversation_id')->load('user')->toArray();
        if ($messages) {
            return $messages;
        } else {
            return [];
        }
    }

    public function messageRouter($userName)
    {
        $user = User::all()->where('username', '=', $userName)->first();
        $current_user_id = auth()->user()->id;

        $userConversations = ConversationParticipants::all()->where('user_id', '=', $user->id);
        $currentUserConversations = ConversationParticipants::all()->where('user_id', '=', $current_user_id);

        // $all_user_conversations = $userConversations->intersect($currentUserConversations)->first();
        $all_user_conversations = $userConversations->intersectByKeys([
            'conversation_id'
        ])->first();

        if ($all_user_conversations !== null) {
            return redirect('/messages/conversation/' . $all_user_conversations->conversation->token);
        } else {
            $new_conversation = Conversation::create([
                'token' => uniqid(),
            ]);
            ConversationParticipants::create([
                'conversation_id' => $new_conversation->id,
                'user_id' => $user->id,
            ]);
            ConversationParticipants::create([
                'conversation_id' => $new_conversation->id,
                'user_id' => $current_user_id,
            ]);
            return redirect('/messages/conversation/' . $new_conversation->token);
        }
        return back();
    }

    public function sendMessage(Request $request, $conversationToken)
    {
        $conversation = Conversation::all()->where('token', '=', $conversationToken)->first();
        if (!$conversation) {
            return back()->with('conversation not found');
        }

        $request->validate([
            'messageText' => 'required',
        ]);

        $newMessageInstance = Message::create([
            'message' => $request->messageText,
            'user_id' => auth()->user()->id,
            'conversation_id' => $conversation->id
        ]);

        return back();
    }
}
