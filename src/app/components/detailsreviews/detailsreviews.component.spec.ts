import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsreviewsComponent } from './detailsreviews.component';

describe('DetailsreviewsComponent', () => {
  let component: DetailsreviewsComponent;
  let fixture: ComponentFixture<DetailsreviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsreviewsComponent]
    });
    fixture = TestBed.createComponent(DetailsreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
