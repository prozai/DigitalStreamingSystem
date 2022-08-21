import { MovieSbService } from './../service/movie.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  addMovie? : FormGroup;
  constructor(private formBuilder:FormBuilder, private movieSbService:MovieSbService, private router:Router) { }

  ngOnInit(): void {
    this.addMovie = this.formBuilder.group({
      id : [0],
      movie_title:[],
      movie_cost:[],
      movie_year:[]
     });
  }
  saveMovie(){
    console.log("Saving new movie");
    console.log(this.addMovie.value);
    this.movieSbService.createMovie(this.addMovie.value)
    .subscribe((data) => {
     console.log('data saved ', data)
    })
  // navigate to movie list component
  this.router.navigate(['/movies']);
  }
}
