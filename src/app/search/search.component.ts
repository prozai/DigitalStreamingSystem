import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actors } from '../model/actors.model';
import { ActorService } from '../service/actor.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input('data')actors:Actors[] = [];
  actorService:ActorService;
  searchText:any;
  page: number = 1;
  constructor(actorService:ActorService, private router: Router) { 
    this.actorService = actorService;
  }

  ngOnInit(): void {
    this.actorService.getActors().subscribe(
      (actorData) => { this.actors = actorData }
    );
  }
  updateActor(actor_id:number): void{
    console.log("Updating actor with id: "+actor_id);
    this.router.navigate(['update-actor', actor_id]);
  }

  deleteActor(toDeleteActor: Actors): void{
    console.log("Deleting actor");
    this.actorService.deleteActor(toDeleteActor.actor_Id).subscribe(
      (data) => {
        // remove from array
        this.actors = this.actors.filter((actor) => actor != toDeleteActor)
      })
  }
  
}
