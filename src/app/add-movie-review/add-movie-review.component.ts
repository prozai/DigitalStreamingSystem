import { MovieService } from './../service/movie.service';
import { Movie } from './../model/movie.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieReviewService } from '../service/movieReview.service';

@Component({
  selector: 'app-add-movie-review',
  templateUrl: './add-movie-review.component.html',
  styleUrls: ['./add-movie-review.component.css']
})
export class AddMovieReviewComponent implements OnInit {
  addMovieReview?: FormGroup;
  movies:Movie[];
  constructor(private formBuilder:FormBuilder, private movieReviewService:MovieReviewService, private router:Router, private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (movieData) => { this.movies = movieData }
    );
    this.addMovieReview = this.formBuilder.group({
      review_id : [0],
      date_posted : [],
      description : [],
      rating : [],
      movie_id : [0]
     });
  }
  saveMovieReview(){
    console.log("Saving movie review");
    console.log(this.addMovieReview.value);
    this.movieReviewService.createMovieReview(this.addMovieReview.value)
    .subscribe((data) => {
      console.log('data saved ', data)
      this.navhome();
    })
    
  }
  navhome(){
    this.router.navigate(['/movie-reviews']);
  }
}
