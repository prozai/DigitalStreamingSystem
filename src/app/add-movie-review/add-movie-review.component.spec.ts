import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMovieReviewComponent } from './add-movie-review.component';

describe('AddMovieReviewComponent', () => {
  let component: AddMovieReviewComponent;
  let fixture: ComponentFixture<AddMovieReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMovieReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMovieReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
