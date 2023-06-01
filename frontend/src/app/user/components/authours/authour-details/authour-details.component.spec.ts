import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthourDetailsComponent } from './authour-details.component';

describe('AuthourDetailsComponent', () => {
  let component: AuthourDetailsComponent;
  let fixture: ComponentFixture<AuthourDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthourDetailsComponent]
    });
    fixture = TestBed.createComponent(AuthourDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
