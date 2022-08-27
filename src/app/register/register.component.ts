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
  constructor(private router:Router, 
    private formBuilder:FormBuilder, 
    private registerService:RegisterService,
    private customValidator: CustomvalidationService) { }

  ngOnInit(): void {
    this.registerAdminForm = this.formBuilder.group({
      admin_id:[0],
      email:['', [Validators.required, Validators.email]],
      name:['', Validators.required],
      username:['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password:['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword:['',[Validators.required, Validators.minLength(6), Validators.maxLength(20)], this.confirmPasswordValidator],
  });
}
get email(){
  return this.registerAdminForm.get('email');
}
get password(){
  return this.registerAdminForm.get('password');
}
get confirmPassword(){
  return this.registerAdminForm.get('confirmPassword');
}
get name(){
  return this.registerAdminForm.get('name');
}
get username(){
  return this.registerAdminForm.get('username');
}

confirmPasswordValidator(control:FormGroup){
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if(password.value !== confirmPassword.value){
    console.log("Password mismatch");
    return {
      mismatch:true
    }
  }
  return false;
}

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
