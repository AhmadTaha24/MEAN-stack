import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthourCardComponent } from './authour-card.component';

describe('AuthourCardComponent', () => {
  let component: AuthourCardComponent;
  let fixture: ComponentFixture<AuthourCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthourCardComponent]
    });
    fixture = TestBed.createComponent(AuthourCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
