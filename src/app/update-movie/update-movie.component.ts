import { MovieService } from './../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../model/movie.model';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  movie_id:number;
  movie:Movie;
  constructor(private movieService:MovieService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.movie_id = this.route.snapshot.params['id'];
    console.log(this.movie_id);
    this.movie = new Movie();
    this.movieService.getMovieById(this.movie_id)
    .subscribe(searchMovie => {
      console.log(searchMovie)
      this.movie = searchMovie;
    }, error => console.log(error))
  }

  updateMovie(){
    console.log("update movie");
    this.movieService.updateMovie(this.movie_id,this.movie)
    .subscribe(data => console.log(data), error => console.log(error));
    this.movie = new Movie();
    this.router.navigate(['/movies']);
  }
}
