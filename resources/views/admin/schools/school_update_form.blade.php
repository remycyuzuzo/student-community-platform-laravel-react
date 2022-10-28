@extends('admin.layouts.base')
@section('title', 'Update a school')

@section('main')
    <div class="col-12">
        <div class="card recent-sales overflow-auto">
            <div class="card-body">
                <h5 class="card-title">Update a school</h5>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Fill out this form</h5>

                        <!-- Multi Columns Form -->
                        <form class="row g-3" method="POST" action="{{ route('updateSchool', $schoolInfo->id) }}">
                            @csrf
                            <div class="col-md-12">
                                <label for="inputName5" class="form-label">School Name</label>
                                <input type="text" name="name" class="form-control"
                                    value="{{ $schoolInfo->school_name }}" id="inputName5">
                            </div>
                            <div class="col-12">
                                <label for="inputEmail5" class="form-label">Street address</label>
                                <input type="text" name="street" class="form-control"
                                    value="{{ $schoolInfo->street_address }}" id="inputEmail5">
                            </div>
                            <div class="col-12">
                                <label for="inputPassword5" class="form-label">School description</label>
                                <textarea name="desc" id="" rows="10" class="form-control">{{ $schoolInfo->school_bio }}</textarea>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress5" class="form-label">province</label>
                                <select name="province_id" id="" class="form-control">
                                    @foreach ($provinces as $province)
                                        <option value="{{ $province->id }}"
                                            @if ($province->id == $schoolInfo->province_id) @selected(true) @endif>{{ $province->name }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress5" class="form-label">School coordinates</label>
                                <input type="text" class="form-control" name="coordinates"
                                    value="{{ $schoolInfo->coordinates }}">
                            </div>

                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">save</button>
                                <button type="reset" class="btn btn-secondary">Reset</button>
                            </div>
                        </form><!-- End Multi Columns Form -->

                    </div>
                </div>

            </div>

        </div>
    </div>
@endsection
