import { MovieReview } from './../model/movieReview.model';
import { Movie } from '../model/movie.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MovieReviewService {
    baseUrl: string = 'http://localhost:8080/api/review'
    // Performs HTTP requests.
    constructor(private httpClient: HttpClient) { }
    // get all  movie review
    getMovieReview(){
        return this.httpClient.get<MovieReview[]>(this.baseUrl);
    }
    // get movie review by id
    getMovieReviewById(id: number) {
        return this.httpClient.get<MovieReview>(this.baseUrl + "/" + id);
    }
    // delete movie review
    deleteMovieReview(id: number) {;
        return this.httpClient.delete<MovieReview>(this.baseUrl + "/review/" + id);
    }
    // add movie review
    createMovieReview(movieReview: MovieReview) {
        // post : create a new movie review record
        return this.httpClient.post(this.baseUrl, movieReview);
    }
    // update movie review
    updateMovieReview(id: number, movieReview:any): Observable<Object> {
        // put : update a movie review record
        return this.httpClient.put(`${this.baseUrl}/review/${id}`, movieReview);
    }
}
