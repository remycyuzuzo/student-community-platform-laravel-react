<aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

        <li class="nav-item">
            <a class="nav-link " href="/admin/">
                <i class="bi bi-grid"></i>
                <span>Dashboard</span>
            </a>
        </li><!-- End Dashboard Nav -->

        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-menu-button-wide"></i><span>Schools</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <a href="{{ route('allSchools') }}">
                        <i class="bi bi-circle"></i><span>all schools</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('newSchool') }}">
                        <i class="bi bi-circle"></i><span>new school</span>
                    </a>
                </li>
            </ul>
        </li><!-- End Components Nav -->

        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                <i class="bi bi-journal-text"></i><span>Users</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <a href="{{ route('manageUsers') }}">
                        <i class="bi bi-circle"></i><span>Manage users</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('newUser') }}">
                        <i class="bi bi-circle"></i><span>New user</span>
                    </a>
                </li>
            </ul>
        </li><!-- End Forms Nav -->

        <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#forms-posts" data-bs-toggle="collapse" href="#">
                <i class="bi bi-journal-text"></i><span>Info board contents</span><i
                    class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="forms-posts" class="nav-content collapse " data-bs-parent="#sidebar-nav">
                <li>
                    <a href="{{ route('managePosts') }}">
                        <i class="bi bi-circle"></i><span>Manage posts</span>
                    </a>
                </li>
                <li>
                    <a href="{{ route('newPost') }}">
                        <i class="bi bi-circle"></i><span>New post</span>
                    </a>
                </li>
            </ul>
        </li><!-- End Forms Nav -->
    </ul>

</aside><!-- End Sidebar-->
