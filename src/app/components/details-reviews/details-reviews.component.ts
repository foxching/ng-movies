import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css'],
})
export class DetailsReviewsComponent {
  movieRates: any[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.loadMovieRates();
  }

  loadMovieRates() {
    this.movieService.getMovieRates().subscribe((data: any[]) => {
      this.movieRates = data;
    });
  }
}
