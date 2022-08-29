import { ActorService } from './../service/actor.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-actor',
  templateUrl: './add-actor.component.html',
  styleUrls: ['./add-actor.component.css']
})
export class AddActorComponent implements OnInit {
  addActor? : FormGroup;
  
  constructor(private formBuilder:FormBuilder, private actorService:ActorService, private router:Router) { }

  ngOnInit(): void {
    this.addActor = this.formBuilder.group({
      actorId : [0],
      firstName:[],
      lastName:[],
      gender:[],
      age:[]
  });
}
  saveActor(){
    console.log("Saving new actor");
    console.log(this.addActor.value);
    this.actorService.createActor(this.addActor.value)
    .subscribe((data) => {
      console.log('Actor data saved ', data)
      this.navhome();
    })
  }
  navhome(){
    this.router.navigate(['/actors']);
  }
}
