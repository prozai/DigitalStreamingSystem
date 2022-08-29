import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActorProfilePicComponent } from './list-actor-profile-pic.component';

describe('ListActorProfilePicComponent', () => {
  let component: ListActorProfilePicComponent;
  let fixture: ComponentFixture<ListActorProfilePicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListActorProfilePicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListActorProfilePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
