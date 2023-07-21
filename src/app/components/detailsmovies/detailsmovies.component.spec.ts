import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsmoviesComponent } from './detailsmovies.component';

describe('DetailsmoviesComponent', () => {
  let component: DetailsmoviesComponent;
  let fixture: ComponentFixture<DetailsmoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsmoviesComponent]
    });
    fixture = TestBed.createComponent(DetailsmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
