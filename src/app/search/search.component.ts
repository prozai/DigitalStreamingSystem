import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actors } from '../model/actors.model';
import { ActorService } from '../service/actor.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  actors:Actors[] = [];
  actorService:ActorService;
  actor:any;
  
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
