import { Movie } from './../model/movie.model';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css'],
})
export class ListMovieComponent implements OnInit {
  @Input('data') movies?: Movie[] = [];
  page: number = 1;
  
  movieService: MovieService;
  // movie_title:any;
  // instantiates the movie service
  constructor(movieService: MovieService, private router: Router) {
    this.movieService = movieService;
  }
  // populate the list of movies array
  ngOnInit(): void {
    // initialize
    this.movieService.getMovies().subscribe(
      (movieData) => { this.movies = movieData }
    );
  }
  // navigate to edit movie component
  updateMovie(id: number): void {
    // navigate to update movie c;omponent
    this.router.navigate(['update-movie', id]);
  }
  // delete movie by filtering out the movie with the id
  deleteMovie(toDeleteMovie: Movie): void {
    this.movieService.deleteMovie(toDeleteMovie.movie_id).subscribe(
      (data) => {
        // remove from array
        this.movies = this.movies.filter((movie) => movie != toDeleteMovie)
      })
  }
}
