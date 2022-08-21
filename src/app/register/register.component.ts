import { MovieSbService } from './../service/movie.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerAdminForm?: FormGroup;
  constructor(private router:Router, private formBuilder:FormBuilder, private registerService:RegisterService) { }

  ngOnInit(): void {
    this.registerAdminForm = this.formBuilder.group({
      // admin_id:[0],
      // admin_email_id:["",Validators.required,Validators.email],
      // admin_name:["",Validators.required],
      // admin_username:["",Validators.required],
      // admin_password:["",[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      // confirmPassword:["",[Validators.required, Validators.minLength(6), Validators.maxLength(20)], this.confirmPasswordValidator]
      
      admin_id:[0],
      admin_email_id:["", Validators.required],
      admin_name:[""],
      admin_username:[""],
      admin_password:[""],
      confirmPassword:[""],
  });
}
get admin_email_id(){
  return this.registerAdminForm.get('admin_email_id');
}
get admin_password(){
  return this.registerAdminForm.get('admin_password');
  // return this.registerAdminForm.controls['password'];
}
get confirmPassword(){
  return this.registerAdminForm.get('confirmPassword');
}
get admin_name(){
  return this.registerAdminForm.get('admin_name');
}
get admin_username(){
  return this.registerAdminForm.get('admin_username');
}

// confirmPasswordValidator(control:FormGroup){
//   const password = control.get('password');
//   const confirmPassword = control.get('confirmPassword');
//   if(password.value !== confirmPassword.value){
//     console.log("Password mismatch");
//     return {
//       mismatch:true
//     }
//   }
//   return false;
// }

registerAdmin(){
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
