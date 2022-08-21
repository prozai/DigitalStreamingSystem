import { MovieReview } from './../model/movieReview.model';
import { Movie } from '../model/movie.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieSbService {
    baseUrl: string = 'http://localhost:8080/api/movie/displayMovie'
    // baseUrl: string = 'http://localhost:3000/movies';
    // Performs HTTP requests.
    constructor(private httpClient: HttpClient) { }
    //  return Observable
    getMovies() {
        // get movie all record
        return this.httpClient.get<Movie[]>(this.baseUrl);
    }
    getMovieById(id: number) {
        // get get Movie By Id
        return this.httpClient.get<Movie>(this.baseUrl + "/" + id);
    }
    // add movie
    createMovie(movie: Movie) {
        // post : create a new movie record
        return this.httpClient.post(this.baseUrl, movie);
    }
    // update movie
    updateMovie(id: number, movie:any): Observable<Object> {
        // put : update a movie record
        return this.httpClient.put(`${this.baseUrl}/${id}`, movie);
    }
    // delete movie
    deleteMovie(id: number) {
        // delete
        return this.httpClient.delete<Movie>(this.baseUrl + "/" + id);
    }
// ================================================================
    // get all  movie review
    getMovieReview(){
        return this.httpClient.get<MovieReview[]>(this.baseUrl + "/review");
    }
    // get movie review by id
    getMovieReviewById(id: number) {
        return this.httpClient.get<MovieReview>(this.baseUrl + "/review/" + id);
    }
    // delete movie review
    deleteMovieReview(id: number) {
        return this.httpClient.delete<MovieReview>(this.baseUrl + "/review/" + id);
    }
    // add movie review
    createMovieReview(movieReview: MovieReview) {
        // post : create a new movie review record
        return this.httpClient.post(this.baseUrl + "/review", movieReview);
    }
    // update movie review
    updateMovieReview(id: number, movieReview:any): Observable<Object> {
        // put : update a movie review record
        return this.httpClient.put(`${this.baseUrl}/review/${id}`, movieReview);
    }
}
