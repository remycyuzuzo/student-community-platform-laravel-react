<?php

namespace App\Http\Controllers;

use App\Models\Community;
use App\Models\CommunityInterest;
use App\Models\CommunityMember;
use App\Models\Interest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class CommunityController extends Controller
{

    public function create()
    {
        $allInterests = Interest::all(['id', 'interest']);
        return Inertia::render('allCommunities/NewCommunity', [
            'interests' => $allInterests
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'communityName' => 'required',
            'bio' => 'required'
        ]);

        $name = $request->communityName;
        $bio = $request->bio;

        $community = Community::create([
            'name' => $name,
            'bio' => $bio,
            'created_by' => auth()->user()->id,
            'unique_id' => uniqid(),
        ]);
        CommunityMember::create([
            'community_id' => $community->id,
            'user_id' => auth()->user()->id,
            'role' => 'admin',
        ]);

        return redirect('/c/' . $community->unique_id)->with('successMessage', 'New Community Created')->with('communityInfo', (array)$community);
    }

    // Render the single community
    public function communityView($communityId)
    {
        $community = Community::all()->where('unique_id', '=', $communityId)->load(['members'])->first();
        $members = CommunityMember::all()->where('community_id', '=', $community->id)->load('user');
        $is_member = $this->is_member($community->id);

        if (!$community) {
            return abort(404);
        }

        return Inertia::render('allCommunities/single', [
            'communityInfo' => $community,
            'is_member' => $is_member,
            'members' => $members->toArray(),
        ]);
    }



    public function join(Request $request)
    {
        $request->validate(['community_unique_id' => 'required']);
        $community = Community::all()->where('unique_id', '=', $request->community_unique_id)->first();

        if (!$this->is_member($community->id)) {
            if (!$community) {
                return back()->with('message', 'community not found');
            }
            CommunityMember::create([
                'community_id' => $community->id,
                'user_id' => auth()->user()->id,
            ]);
            return back()->with('success', 'you have successfuly joined the community');
        }
    }


    public function leave(Request $request)
    {
        $request->validate(['community_unique_id' => 'required']);

        $community = Community::all()->where('unique_id', '=', $request->community_unique_id)->first();
        if ($community) {
            if ($this->is_member($community->id)) {
                DB::table('community_members')->where('community_id', $community->id)->where('user_id', auth()->user()->id)->delete();
                return back()->with('success', 'you have successfuly left the community');
            }
            return back()->with('message', 'You\'ve already left!');
        }
        return back()->with('message', 'there is no such community');
    }

    private function is_member($communityId)
    {
        return CommunityMember::where('community_id', '=', $communityId)
            ->where('user_id', '=', auth()->user()->id)
            ->first() != null ? true : false;
    }


    public function myCommunitiesGet()
    {
        $myCommunities = CommunityMember::all()->where('user_id', '=', auth()->user()->id)->load('community');
        return $myCommunities->toArray();
    }
}
