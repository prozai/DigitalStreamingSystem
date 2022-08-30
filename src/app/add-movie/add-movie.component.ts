import { ActorService } from './../service/actor.service';
import { MovieService } from './../service/movie.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { Router } from '@angular/router';
import { Actors } from '../model/actors.model';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  addMovie? : FormGroup;
  actors:Actors[];
  constructor(private formBuilder:FormBuilder, private movieService:MovieService, private router:Router, private actorService:ActorService) { }

  ngOnInit(): void {
    this.actorService.getActors().subscribe(
      (actorData) => { this.actors = actorData }
    );
    this.addMovie = this.formBuilder.group({
      movie_id : [0],
      title:[],
      cost:[],
      year:[],
      actor_id:[],
      thumbnail:[]
     });
  }
  saveMovie(){
    console.log("Saving new movie");
    console.log(this.addMovie.value);
    this.movieService.createMovie(this.addMovie.value)
    .subscribe((data) => {
     console.log('data saved ', data)
     this.navhome();
    })
  // navigate to movie list component
  
  }
  navhome(){
    this.router.navigate(['/add-movies']);
  }
}
