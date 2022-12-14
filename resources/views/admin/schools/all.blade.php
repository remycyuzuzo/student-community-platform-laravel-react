@extends('admin.layouts.base')
@section('title', 'All school information management')

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
                    <h5 class="card-title">Schools</h5>
                    <a href="{{ route('newSchool') }}" class="btn btn-primary"> <i class="fas fa-plus-circle"></i> New</a>

                </div>

                <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                    <div class="dataTable-container">
                        <table class="table table-borderless datatable dataTable-table">
                            <thead>
                                <th>#</th>
                                <th>School name</th>
                                <th>School location</th>
                                <th></th>
                                <th>action</th>
                            </thead>
                            <tbody>
                                @if ($schools->count() > 0)
                                    @php
                                        $i = 1;
                                    @endphp
                                    @foreach ($schools as $school)
                                        <tr>
                                            <th scope="row"><a href="#">{{ $i++ }}</a></th>
                                            <td>{{ $school->school_name }}</td>
                                            <td>{{ $school->province ? $school->province->name : '' }}</td>
                                            <td></td>
                                            <td>
                                                <form action="{{ route('deleteSchool', $school->id) }}" method="post"
                                                    class="m-0 mb-0 d-inline" id="delete">
                                                    @csrf
                                                    <button type="button"
                                                        onclick="confirm('do you want to delete this school?') && document.querySelector('form#delete').submit()"
                                                        class="btn btn-warning">Delete</button>
                                                </form>
                                                <a href="{{ route('updateSchool', $school->id) }}" type="submit"
                                                    class="btn btn-warning">Edit</a>
                                            </td>
                                        </tr>
                                    @endforeach
                                @else
                                    <div class="alert alert-warning">{{ 'no schools available' }}</div>
                                @endif

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    </div>
@endsection
