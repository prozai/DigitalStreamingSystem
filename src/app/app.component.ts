import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.loggedIn = sessionStorage.getItem('loggedIn');
  }
  title = 'DigitalStreamingSystem';
  loggedIn: string;
  constructor(private router:Router){}
  
  logOut(){
    sessionStorage.setItem("loggedIn",'no');
    this.router.navigate(['login']);
  }
}
