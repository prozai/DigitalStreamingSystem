import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMovieReviewComponent } from './list-movie-review.component';

describe('ListMovieReviewComponent', () => {
  let component: ListMovieReviewComponent;
  let fixture: ComponentFixture<ListMovieReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMovieReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMovieReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
