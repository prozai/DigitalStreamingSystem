import { Movie } from './../model/movie.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieReview } from '../model/movieReview.model';
import { MovieReviewService } from '../service/movieReview.service';

@Component({
  selector: 'app-list-movie-review',
  templateUrl: './list-movie-review.component.html',
  styleUrls: ['./list-movie-review.component.css']
})
export class ListMovieReviewComponent implements OnInit {
  movieReview: MovieReview[];
  movieReviewService: MovieReviewService;
  movies?: Movie[];
  // instantiates the movie service
  constructor(movieReviewService: MovieReviewService, private router: Router) {
    this.movieReviewService = movieReviewService;
   }
  
  ngOnInit(): void {
    // initialize
    this.movieReviewService.getMovieReview().subscribe(
      (movieReviewData) => { this.movieReview = movieReviewData }
    );
  }
  updateMovieReview(id:number):void{
    // navigate to update movie component
    this.router.navigate(['update-movie-review', id]);
  }
  deleteMovieReview(toDeleteMovieReview : MovieReview): void {
    this.movieReviewService.deleteMovieReview(toDeleteMovieReview.review_id).subscribe(
      (data) => {
        // remove from array
        this.movieReview = this.movieReview.filter((movieReview) => movieReview != toDeleteMovieReview)
      })
  }
  getMovieName(movieId:number): string{
    for(let movie of this.movies) {
      if(movie.movie_id === movieId) {
        return movie.title;
      }
    }
    return "";
   }
  
}
