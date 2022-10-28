@extends('admin.layouts.base')
@section('title', 'Create a new School')

@section('main')
    <div class="col-12">
        <div class="card recent-sales overflow-auto">
            <div class="card-body">
                <h5 class="card-title">Create a new school</h5>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Fill out this form</h5>

                        <!-- Multi Columns Form -->
                        <form class="row g-3" method="POST" action="{{ route('newSchool') }}">
                            @csrf
                            <div class="col-md-12">
                                <label for="inputName5" class="form-label">School Name</label>
                                <input type="text" name="name" class="form-control" id="inputName5">
                            </div>
                            <div class="col-12">
                                <label for="inputEmail5" class="form-label">Street address</label>
                                <input type="text" name="street" class="form-control" id="inputEmail5">
                            </div>
                            <div class="col-12">
                                <label for="inputPassword5" class="form-label">School description</label>
                                <textarea name="desc" id="" rows="10" class="form-control"></textarea>
                            </div>
                            <div class="col-12">
                                <label for="inputAddress5" class="form-label">province</label>
                                <select name="province_id" id="" class="form-control">
                                    <option value="1">North</option>
                                    <option value="2">South</option>
                                    <option value="3">West</option>
                                    <option value="4">East</option>
                                    <option value="5">Kigali City</option>
                                </select>
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
