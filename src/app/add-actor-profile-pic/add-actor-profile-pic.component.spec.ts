import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActorProfilePicComponent } from './add-actor-profile-pic.component';

describe('AddActorProfilePicComponent', () => {
  let component: AddActorProfilePicComponent;
  let fixture: ComponentFixture<AddActorProfilePicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActorProfilePicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddActorProfilePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
