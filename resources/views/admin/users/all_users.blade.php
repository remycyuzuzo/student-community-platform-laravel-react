@extends('admin.layouts.base')
@section('title', 'All Users information management')

@section('main')
    <div class="col-12">
        <div class="card recent-sales overflow-auto">

            <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
            </div>

            @if (session('success'))
                <div class="alert alert-success"> {{ session('success') }} </div>
            @endif

            <div class="card-body">
                <div class="card-head d-flex align-items-center justify-content-between">
                    <h5 class="card-title">users</h5>
                    <a href="{{ route('newUser') }}" class="btn btn-primary"> <i class="bi bi-user-plus"></i> New
                        user</a>
                </div>

                <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                    <div class="dataTable-container">
                        <table class="table table-borderless datatable dataTable-table">
                            <thead>
                                <th>#</th>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>User name</th>
                                <th>Role</th>
                                <th>status</th>
                                <th>action</th>
                            </thead>
                            <tbody>
                                @if ($users->count() > 0)
                                    @php
                                        $i = 1;
                                    @endphp
                                    @foreach ($users as $user)
                                        <tr>
                                            <th scope="row"><a href="#">{{ $i++ }}</a></th>
                                            <td>{{ $user->first_name }}</td>
                                            <td>{{ $user->last_name }}</td>
                                            <td>{{ $user->username }}</td>
                                            <td>{{ $user->role }}</td>
                                            <td>
                                                @if ($user->user_status == 1)
                                                    <span class="badge badge-success bg-success">active</span>
                                                @else
                                                    <span class="badge badge-warning bg-danger">disabled</span>
                                                @endif
                                            </td>
                                            <td>
                                                <form action="{{ route('deleteUser', $user->id) }}" method="post"
                                                    class="m-0 mb-0 d-inline" id="delete">
                                                    @csrf
                                                    <button type="button"
                                                        onclick="confirm('do you want to delete this user?') && document.querySelector('form#delete').submit()"
                                                        class="btn btn-warning">Delete</button>
                                                </form>
                                                <a href="{{ route('disableUser', $user->id) }}" type="submit"
                                                    class="btn btn-warning">
                                                    {{ $user->user_status ? 'disable' : 'enable' }}
                                                </a>
                                            </td>
                                        </tr>
                                    @endforeach
                                @else
                                    <div class="alert alert-warning">{{ 'no users available' }}</div>
                                @endif

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    </div>
@endsection
