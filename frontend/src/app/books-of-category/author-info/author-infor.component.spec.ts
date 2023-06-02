import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorInforComponent } from './author-infor.component';

describe('AuthorInforComponent', () => {
  let component: AuthorInforComponent;
  let fixture: ComponentFixture<AuthorInforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorInforComponent]
    });
    fixture = TestBed.createComponent(AuthorInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
