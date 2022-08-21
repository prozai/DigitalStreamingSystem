import { Movie } from './../model/movie.model';
import { Component, OnInit } from '@angular/core';
import { MovieSbService } from '../service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {
  movies?: Movie[];
  movieSbService: MovieSbService;
  // instantiates the movie service
  constructor(movieSbService: MovieSbService, private router: Router) {
    this.movieSbService = movieSbService;
  }
  // populate the list of movies array
  ngOnInit(): void {
    // initialize
    this.movieSbService.getMovies().subscribe(
      (movieData) => { this.movies = movieData }
    );
  }
  // navigate to edit movie component
  updateMovie(id: number): void {
    // navigate to update movie component
    this.router.navigate(['update-movie', id]);
  }
  // delete movie by filtering out the movie with the id
  deleteMovie(toDeleteMovie: Movie): void {
    this.movieSbService.deleteMovie(toDeleteMovie.movie_id).subscribe(
      (data) => {
        // remove from array
        this.movies = this.movies.filter((movie) => movie != toDeleteMovie)
      })
  }
}
