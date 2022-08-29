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
    const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    const phonePattern = "^[0-9]{8}$";
    const namePattern = "^[a-zA-Z ]{6, 20}$";
    const usernamePattern = "^[a-zA-Z0-9]{6, 20}$";
    const passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
    this.registerAdminForm = this.formBuilder.group({
      admin_id:[0],
      email:['test1@test.com', [Validators.required, Validators.email,Validators.pattern(emailPattern)]],
      name:['test123', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(namePattern)]],
      phone: ['91234567', [Validators.required, Validators.minLength(8),Validators.maxLength(8), Validators.pattern(phonePattern)]],
      username:['test123', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern(usernamePattern)]],
      password:['password', [Validators.required, Validators.minLength(6), Validators.pattern(passwordPattern)]],
      
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
    console.log(this.registerAdminForm.errors)
    // stop here if form is invalid
    if (this.registerAdminForm.invalid) {
      return;
    }
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
