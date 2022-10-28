<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Province;
use App\Models\School;
use App\Models\Sector;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminSchoolsController extends Controller
{
    public function all()
    {
        $schools = School::all()->load(['province']);
        return view('admin.schools.all', [
            'schools' => $schools
        ]);
    }


    public function create(Request $request)
    {
        // $provinces = Province::all();
        // $sectors = Sector::all();
        // $cities = City::all();

        return view('admin.schools.new-school');
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

        $newSchool = School::create([
            'school_name' => $request->name,
            'street_address' => $request->street,
            'school_bio' => $request->desc,
            'province_id' => $request->province_id,
        ]);

        if ($newSchool) {
            return redirect(route('allSchools'));
        } else {
            return back()->with('error', 'error');
        }
    }


    public function destroy($schoolId, Request $request)
    {
        $delete = DB::table('schools')->where('id', '=', $schoolId)->delete();
        if ($delete) {
            return back()->with('success', 'record deleted');
        }
    }


    public function updateForm($schoolId)
    {
        $schoolInfo = $this->getSchoolInfo($schoolId);
        $provinces = Province::all();
        if (!$schoolInfo) {
            abort(404, 'school not found');
        }
        return view('admin.schools.school_update_form', [
            'schoolInfo' => $schoolInfo,
            'provinces' => $provinces
        ]);
    }


    public function update($schoolId, Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);
        if (!$this->getSchoolInfo($schoolId)) {
            return back()->with('error', 'school not found');
        }

        $school =
            School::where('id', $schoolId)->update([
                'school_name' => $request->name,
                'street_address' => $request->street,
                'school_bio' => $request->desc,
                'province_id' => $request->province_id,
                'coordinates' => $request->coordinates,
            ]);

        if ($school) {
            return redirect(route('allSchools'))->with('success', 'school data updated');
        } else {
            return back()->with('error', 'error');
        }
    }


    private function getSchoolInfo($schoolId)
    {
        return School::all()->where('id', '=', $schoolId)->first();
    }
}
