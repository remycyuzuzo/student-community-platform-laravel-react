@extends('admin.layouts.base')
@section('title', 'Create a new School')

@section('main')
    <div class="col-12">
        <div class="card recent-sales overflow-auto">
            <div class="card-body">
                <h5 class="card-title">Manual user creation</h5>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Fill out this form</h5>

                        <!-- Multi Columns Form -->
                        <form class="row g-3" method="POST" action="{{ route('newUser') }}">
                            @csrf
                            <div class="col-md-12">
                                <label for="inputName5" class="form-label" required>First Name</label>
                                <input type="text" name="fname" class="form-control" value="{{ old('fname') }}"
                                    id="inputName5">
                                @error('fname')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>

                            <div class="col-12">
                                <label for="inputEmail5" class="form-label">Last name</label>
                                <input type="text" name="lname" value="{{ old('lname') }}" class="form-control"
                                    id="inputEmail5">
                            </div>

                            <div class="col-12">
                                <label for="inputPassword5" class="form-label">User role</label>
                                <select name="role" id="" class="form-control" required>
                                    <option disabled selected>Select the role</option>
                                    <option value="student">Student</option>
                                    <option value="admin">System Administrator</option>
                                </select>
                                @error('role')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="col-12">
                                <label for="inputAddress5" class="form-label">Email Address</label>
                                <input type="email" value="{{ old('fname') }}" class="form-control" name="email"
                                    required>
                                @error('email')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>

                            <div class="col-12">
                                <label for="inputAddress5" class="form-label">Password</label>
                                <input type="password" class="form-control" name="password" required>
                                @error('password')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>

                            <div class="col-12">
                                <label for="inputAddress5" class="form-label">Confirm the password</label>
                                <input type="password" class="form-control" name="password_confirmation" required>
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
