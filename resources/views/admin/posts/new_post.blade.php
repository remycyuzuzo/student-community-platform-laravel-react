@extends('admin.layouts.base')

@section('title')
    New InfoBoard Post
@endsection

@section('main')
    <div class="col-12">
        <div class="card recent-sales overflow-auto">
            <div class="card-body">
                <h5 class="card-title">Create the post</h5>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Fill out this form</h5>

                        <!-- Multi Columns Form -->
                        <form class="row g-3" method="POST" enctype="multipart/form-data" id="newPostForm"
                            action="{{ route('newPost') }}">
                            @csrf
                            <div class="col-md-12">
                                <label for="inputName5" class="form-label" required>Post title</label>
                                <input type="text" name="title" class="form-control" value="{{ old('title') }}"
                                    id="inputName5">
                                @error('title')
                                    <span class="text-danger">{{ $message }}</span>
                                @enderror
                            </div>
                            <div class="col-12 ">
                                <div class="relative ">
                                    <label for="content" class="form-label">Content</label>
                                    <!-- Quill Editor Default -->
                                    <div class="quill-editor-default">
                                        <p>
                                            {{ old('content') }}
                                        </p>
                                    </div>
                                    <!-- End Quill Editor Default -->
                                </div>
                            </div>

                            <div class="col-12">
                                <label for="thumb">Thumbnail</label>
                                <input type="file" name="thumb" class="form-control" id="thumb">
                            </div>

                            <div class="col-12">
                                <label for="tags">Tags</label>
                                <select class="js-data-example-ajax form-control" name="tags[]" id="tags" multiple>
                                </select>
                            </div>

                            <div class="col-12">
                                <label for="category">Category</label>
                                <select name="category" id="category" class="form-control" required>
                                    <option disabled selected>Select the post category</option>
                                    <option value="blog">Blog post</option>
                                    <option value="article">article</option>
                                    <option value="scholarship">scholarship</option>
                                    <option value="announcement">announcement</option>
                                </select>
                            </div>

                            <textarea style="display:none" name="content" id="hiddenArea"></textarea>

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

@section('head')
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
@endsection

@section('foot')
    <script src="https://code.jquery.com/jquery-3.6.1.min.js"
        integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>
    <script>
        $('.js-data-example-ajax').select2({
            tags: true,
            ajax: {
                url: 'http://127.0.0.1:8000/get/tag/',
                data: function(params) {
                    var query = {
                        name: params.term
                    }
                    return query;
                },
                processResults: function(data) {
                    console.log(data);
                    data = JSON.parse(data)
                    const resultsObj = data.map(interest => {
                        return {
                            id: interest.id,
                            text: interest.interest,
                        }
                    });
                    return {
                        results: resultsObj
                    };
                }
            }
        });


        $("#newPostForm").on("submit", function() {
            $("#hiddenArea").val($(".quill-editor-default").html());
        })
    </script>
@endsection
