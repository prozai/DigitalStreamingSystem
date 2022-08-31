import { Movie } from './../model/movie.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieReview } from '../model/movieReview.model';
import { MovieReviewService } from '../service/movieReview.service';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-list-movie-review',
  templateUrl: './list-movie-review.component.html',
  styleUrls: ['./list-movie-review.component.css']
})
export class ListMovieReviewComponent implements OnInit {
  @Input('data')movieReview: MovieReview[] = [];
  movieReviewService: MovieReviewService;
  @Input('data')movies?: Movie[] = [];
  searchText:any;
  
  page: number = 1;
  movieService: MovieService;
  // instantiates the movie service
  constructor(movieReviewService: MovieReviewService, private router: Router, movieService: MovieService) {
    this.movieReviewService = movieReviewService;
    this.movieService = movieService;
   }
  
  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (movieData: Movie[]) => { this.movies = movieData }
    );
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
   getMovieImg(movieId:number): string{
    for(let movie of this.movies) {
      if(movie.movie_id === movieId) {
        return movie.thumbnail;
      }
    }
    return "";
   }
  
}
