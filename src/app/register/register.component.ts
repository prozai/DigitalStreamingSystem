import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { CustomvalidationService } from '../service/customvalidation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerAdminForm?: FormGroup;
  submitted = false;
  constructor(private router:Router, 
    private formBuilder:FormBuilder, 
    private registerService:RegisterService
    ) { }

  ngOnInit(): void {
    const emailPattern = "";
    const phonePattern = "";
    const namePattern = "";
    const usernamePattern = "";
    const passwordPattern = "";

    this.registerAdminForm = this.formBuilder.group({
      admin_id:[0],
      email:['test1@test.com', [Validators.required, Validators.email,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      name:['testtest', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z]$/)]],
      phone: ['91234567', [Validators.required, Validators.minLength(8),Validators.maxLength(8), Validators.pattern(/^[0-9]{8}$/)]],
      username:['test123', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(/^[a-zA-Z0-9]{6, 20}$/)]],
      password:['password!1A', [Validators.required, Validators.minLength(6), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],

      // admin_id:[0],
      // email:['test1@test.com'],
      // name:['testtest'],
      // phone: ['91234567'],
      // username:['test123'],
      // password:['password123!'],
      
  });
}
get email(){
  return this.registerAdminForm.get('email');
}
get password(){
  return this.registerAdminForm.get('password');
}
get phone(){
  return this.registerAdminForm.get('phone');
}
get name(){
  return this.registerAdminForm.get('name');
}
get username(){
  return this.registerAdminForm.get('username');
}
get f() { return this.registerAdminForm.controls; }

onSubmit(){
    this.submitted = true;
    console.log(this.registerAdminForm.value);
    console.log(this.registerAdminForm.errors)
    // stop here if form is invalid
    if (this.registerAdminForm.invalid) {
      console.log("inside invalid: "+this.registerAdminForm.value);
      return;
    }else if(this.registerAdminForm.valid){
      console.log("Registering admin");
      console.log(this.registerAdminForm.value);
      this.registerService.createAdmin(this.registerAdminForm.value)
      .subscribe((data) => {
        console.log('Admin Data Saved',data)
      })
      sessionStorage.setItem("loggedIn", 'yes');
      this.router.navigate(['movies']);
    }
  }
}
