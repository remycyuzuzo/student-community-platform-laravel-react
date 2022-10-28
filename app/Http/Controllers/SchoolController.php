<?php

namespace App\Http\Controllers;

use App\Models\School;
use App\Models\UserSchool;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SchoolController extends Controller
{
    public function all()
    {
        $schools = School::all()->load(['province', 'sector', 'district', 'city']);
        return $schools->toArray();
    }


    public function studentsInSchool($schoolId)
    {
        $studentsInSchool = UserSchool::all()->where('school_id', '=', $schoolId);
        return $studentsInSchool->toArray();
    }

    public function renderSchools()
    {
        $schools = School::all()->load(['province', 'sector', 'district', 'city']);

        return Inertia::render('Schools/Schools', [
            'schools' => $schools,
        ]);
    }


    public function renderStudentsInSchool($schoolId)
    {
        $studentsInSchool = UserSchool::all()->where('school_id', '=', $schoolId);

        return Inertia::render('Schools/SchoolStudents', [
            'studentsInSchool' => $studentsInSchool,
        ]);
    }


    public function renderSchoolProfile($schoolId)
    {
        $school = School::all()->where('id', '=', $schoolId)->first();
        if (!$school) {
            abort(404);
        }
        return Inertia::render('Schools/SchoolProfile', [
            'school' => $school
        ]);
    }
}
