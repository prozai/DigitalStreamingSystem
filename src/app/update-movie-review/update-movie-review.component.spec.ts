import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMovieReviewComponent } from './update-movie-review.component';

describe('UpdateMovieReviewComponent', () => {
  let component: UpdateMovieReviewComponent;
  let fixture: ComponentFixture<UpdateMovieReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMovieReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMovieReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
