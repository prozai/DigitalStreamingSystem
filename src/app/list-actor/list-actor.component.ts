import { ActorService } from './../service/actor.service';
import { Actors } from './../model/actors.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-actor',
  templateUrl: './list-actor.component.html',
  styleUrls: ['./list-actor.component.css']
})
export class ListActorComponent implements OnInit {
  actors?:Actors[];
  actorService:ActorService;
  // instantiates the actor service
  constructor(actorService:ActorService, private router: Router) {
    this.actorService = actorService;
   }

  ngOnInit(): void {
    this.actorService.getActors().subscribe(
      (actorData) => { this.actors = actorData }
    );
  }

  updateActor(actorId:number): void{
    console.log("Updating actor with id: "+actorId);
    this.router.navigate(['update-actor', actorId]);
  }

  deleteActor(toDeleteActor: Actors): void{
    console.log("Deleting actor");
    this.actorService.deleteActor(toDeleteActor.actorId).subscribe(
      (data) => {
        // remove from array
        this.actors = this.actors.filter((actor) => actor != toDeleteActor)
      })
  }
}
