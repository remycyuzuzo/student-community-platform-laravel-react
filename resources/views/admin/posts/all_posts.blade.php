@extends('admin.layouts.base')
@section('title', 'All InfoBoard information management')

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
                    <h5 class="card-title">Information Board</h5>
                    <a href="{{ route('newPost') }}" class="btn btn-primary"> <i class="bi bi-post-plus"></i> New
                        Information Board post</a>
                </div>

                <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
                    <div class="dataTable-container">
                        <table class="table table-borderless datatable dataTable-table">
                            <thead>
                                <th>#</th>
                                <th>title</th>
                                <th>created at</th>
                                <th>last updated</th>
                                <th>by</th>
                                <th>status</th>
                                <th>action</th>
                            </thead>
                            <tbody>
                                @if ($posts->count() > 0)
                                    @php
                                        $i = 1;
                                    @endphp
                                    @foreach ($posts as $post)
                                        <tr>
                                            <td scope="row"><a href="#">{{ $i++ }}</a></td>
                                            <td>{{ $post->title }}</td>
                                            <td>{{ $post->created_at }}</td>
                                            <td>{{ $post->updated_at }}</td>
                                            <td>
                                                {{ $post->user ? $post->user->first_name . ' ' . $post->user->last_name : 'user deleted' }}
                                            </td>
                                            <td>
                                                @if ($post->status == 1)
                                                    <span class="badge badge-success bg-success">published</span>
                                                @else
                                                    <span class="badge badge-warning bg-danger">not published</span>
                                                @endif
                                            </td>
                                            <td>
                                                <form action="{{ route('deletePost', $post->id) }}" method="post"
                                                    class="m-0 mb-0 d-inline" id="delete">
                                                    @csrf
                                                    <button type="button"
                                                        onclick="confirm('do you want to delete this post?') && document.querySelector('form#delete').submit()"
                                                        class="btn btn-warning btn-sm"><i class="bi bi-trash"></i>
                                                        Delete</button>
                                                </form>
                                                <a href="{{ route('unPublish', $post->id) }}" type="submit"
                                                    class="btn btn-secondary btn-sm">
                                                    {{ $post->status ? 'unpublish' : 'publish' }}
                                                </a>
                                                <a href="{{ route('editPost', $post->id) }}"
                                                    class="btn btn-secondary btn-sm">
                                                    <i class="bi bi-pencil-square"></i>
                                                    Update
                                                </a>
                                            </td>
                                        </tr>
                                    @endforeach
                                @else
                                    <div class="alert alert-warning">{{ 'no posts available' }}</div>
                                @endif

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>
    </div>
@endsection
