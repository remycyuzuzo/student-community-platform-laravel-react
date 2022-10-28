<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Province;
use App\Models\School;
use App\Models\Sector;
use Illuminate\Http\Request;

class AdminSchoolsController extends Controller
{
    public function all()
    {
        $schools = School::all();
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
}
