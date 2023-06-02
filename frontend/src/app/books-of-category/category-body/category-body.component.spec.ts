import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBodyComponent } from './category-body.component';

describe('CategoryBodyComponent', () => {
  let component: CategoryBodyComponent;
  let fixture: ComponentFixture<CategoryBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryBodyComponent]
    });
    fixture = TestBed.createComponent(CategoryBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
