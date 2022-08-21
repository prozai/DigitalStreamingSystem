import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieReview } from '../model/movieReview.model';
import { MovieSbService } from '../service/movie.service';
import { MovieReviewService } from '../service/movieReview.service';

@Component({
  selector: 'app-list-movie-review',
  templateUrl: './list-movie-review.component.html',
  styleUrls: ['./list-movie-review.component.css']
})
export class ListMovieReviewComponent implements OnInit {
  movieReview: MovieReview[];
  movieReviewService: MovieReviewService;
  // instantiates the movie service
  constructor(movieSbService: MovieSbService, private router: Router) { }
  
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

}
