import { AuthenticateAdminService } from './../service/authenticate-admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


// Decorator / selector, templateUrl, css
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// OnInit is a OnInit() lifecycle hook that is called after the constructor (initialization)
export class LoginComponent implements OnInit {
  // loginForm  needs initialization is a FormGroup 
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private authenticateAdminService:AuthenticateAdminService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      loginid: ['test1@test.com', [Validators.email, Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      password: ['password!1A', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]]
    })
  }

  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    console.log("Authenticating :");
    console.log(this.loginForm.value);

    const loginid: string = this.loginForm.controls['loginid'].value;
    const password: string = this.loginForm.controls['password'].value;
    let authorised: Boolean;

    if (this.loginForm.invalid) {
      console.log("Invalid form");
      return;
    }

    if (this.loginForm.valid) {
      
      this.authenticateAdminService.authenticateAdmin(loginid, password).subscribe(
        (adminAuthenticationStatus) => {
          console.log("Admin authentication status: ", adminAuthenticationStatus);
          authorised = adminAuthenticationStatus;
          if (authorised) {
            sessionStorage.setItem("loggedIn", 'yes');
            console.log("Admin authentication status: ", authorised);
            this.router.navigate(['movies']);
          } else {
            this.loginForm.controls['loginid'].setValue(loginid);
            this.loginForm.controls['password'].setValue("");
          }
        }
      );
    } else {
      console.log("Login failed");
    }
  }
}
