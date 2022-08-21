import { ActivatedRoute, Router } from '@angular/router';
import { ActorService } from './../service/actor.service';
import { Component, OnInit } from '@angular/core';
import { Actors } from '../model/actors.model';

@Component({
  selector: 'app-update-actor',
  templateUrl: './update-actor.component.html',
  styleUrls: ['./update-actor.component.css']
})
export class UpdateActorComponent implements OnInit {
  actorId:number;
  actor:Actors;
  constructor(private actorService:ActorService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.actorId = this.route.snapshot.params['id'];
    console.log(this.actorId);
    this.actor = new Actors();
    this.actorService.getActorById(this.actorId)
    .subscribe(searchActor => {
      console.log(searchActor)
      this.actor = searchActor;
    }, error => console.log(error))
  }
  
  updateActor(){
    console.log("update actor");
    this.actorService.updateActor(this.actorId,this.actor)
    .subscribe(data => console.log(data), error => console.log(error));
    this.actor = new Actors();
    this.router.navigate(['/actors']);
  }
}
