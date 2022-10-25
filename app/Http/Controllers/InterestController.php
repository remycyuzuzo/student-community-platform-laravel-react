<?php

namespace App\Http\Controllers;

use App\Models\CommunityInterest;
use App\Models\Interest;
use Illuminate\Http\Request;

class InterestController extends Controller
{
    public function create(Request $request)
    {
        $interest =  Interest::create(['interest' => $request->interest]);
        return (array) $interest;
    }

    public function filter(Request $request)
    {
        $keyword = $request->k;
        $interests = Interest::query()->where('interest', 'LIKE', "%{$keyword}%")->get()->toJson();
        return $interests;
    }

    public function communityInterestCreate(Request $request)
    {
        $request->validate([
            'communityTopics' => 'required',
            'communityId' => 'required',
        ]);

        $communityTopics = $request->communityTopics;

        $interests = Interest::all(['interest', 'id'])->toArray();
        if (is_array($communityTopics)) {
            foreach ($communityTopics as $topic) {
                $interest_info = Interest::all()->where('interest', '=', 'Database')->first();
                if (!$interest_info) {
                    $interest_info = Interest::create(['interest' => $topic]);
                }
                CommunityInterest::create([
                    'community_id' => $request->communityId,
                    'interest_id' => $interest_info->id,
                ]);

                return back()->with('success', 'Succeeded');
            }
        }
        return back()->with('fail', 'there was an internal error');
    }
}
