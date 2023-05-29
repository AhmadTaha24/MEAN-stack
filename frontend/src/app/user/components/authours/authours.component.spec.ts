import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthoursComponent } from './authours.component';

describe('AuthoursComponent', () => {
  let component: AuthoursComponent;
  let fixture: ComponentFixture<AuthoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthoursComponent]
    });
    fixture = TestBed.createComponent(AuthoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
