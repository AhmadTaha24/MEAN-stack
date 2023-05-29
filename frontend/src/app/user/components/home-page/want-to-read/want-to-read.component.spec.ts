import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantToReadComponent } from './want-to-read.component';

describe('WantToReadComponent', () => {
  let component: WantToReadComponent;
  let fixture: ComponentFixture<WantToReadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WantToReadComponent]
    });
    fixture = TestBed.createComponent(WantToReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
