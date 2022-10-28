<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Administrator Login Page </title>
  <meta content="" name="description">
  <meta content="" name="keywords">

    @include('admin.layouts.head')

  <!-- =======================================================
  * Template Name: NiceAdmin - v2.4.1
  * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>
    <main>
        <div class="container">
    
          <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
    
                  <div class="d-flex justify-content-center py-4">
                    <a href="index.html" class="logo d-flex align-items-center w-auto">
                      <img src="assets/img/logo.png" alt="">
                      <span class="d-none d-lg-block"> {{ "OSCP" }} </span>
                      <span class="text-muted pl-2" style="padding-left: 20px"> System Administrator</span>
                    </a>
                  </div><!-- End Logo -->
    
                  <div class="card mb-3">
    
                    <div class="card-body">
                        @if (session('error'))
                            <div class="alert alert-warning">{{ session('error') }}</div>
                        @endif
    
                      <div class="pt-4 pb-2">
                        <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                        <p class="text-center small">Enter your username &amp; password to login</p>
                      </div>
    
                      <form method="post" action="{{ route('adminLogin') }}" class="row g-3 needs-validation" novalidate="">
                        @csrf
                        <div class="col-12">
                          <label for="yourUsername" class="form-label">Email address</label>
                          <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="text" name="email" class="form-control" id="yourUsername" required="">
                            @error('email')
                            <div class="invalid-feedback">{{ $message }}</div>
                                
                            @enderror
                          </div>
                        </div>
    
                        <div class="col-12">
                          <label for="yourPassword" class="form-label">Password</label>
                          <input type="password" name="password" class="form-control" id="yourPassword" required="">
                          @error('password')
                             <div class="invalid-feedback">{{ $message }}</div>                              
                          @enderror
                        </div>
    
                        <div class="col-12">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                            <label class="form-check-label" for="rememberMe">Remember me</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <button class="btn btn-primary w-100" type="submit">Login</button>
                        </div>
                      </form>
    
                    </div>
                  </div>

                </div>
              </div>
            </div>
    
          </section>
    
        </div>
      </main>
  <!-- Template Main JS File -->
  <script src="/assets/js/main.js"></script>

</body>

</html>