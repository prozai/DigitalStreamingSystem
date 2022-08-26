import { MovieReview } from './../model/movieReview.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieReviewService } from '../service/movieReview.service';

@Component({
  selector: 'app-update-movie-review',
  templateUrl: './update-movie-review.component.html',
  styleUrls: ['./update-movie-review.component.css']
})
export class UpdateMovieReviewComponent implements OnInit {
  review_id:number;
  movieReview:MovieReview;
  constructor(private movieReviewService:MovieReviewService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.review_id = this.route.snapshot.params['id'];
    console.log(this.review_id);
    this.movieReview = new MovieReview();
    this.movieReviewService.getMovieReviewById(this.review_id)
    .subscribe(searchMovieReview => {
      console.log(searchMovieReview)
      this.movieReview = searchMovieReview;
    }, error => console.log(error))
  }
  updateMovieReview(){
    console.log("update movie review");
    this.movieReviewService.updateMovieReview(this.review_id,this.movieReview)
    .subscribe(data => console.log(data), error => console.log(error));
    this.movieReview = new MovieReview();
    this.router.navigate(['/movie-reviews']);
  }
}
