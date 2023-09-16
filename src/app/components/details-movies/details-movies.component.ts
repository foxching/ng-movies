import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css'],
})
export class DetailsMoviesComponent {
  similarMovies: any[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.loadSimilarMovies();
  }

  loadSimilarMovies() {
    this.movieService.getSimilarMovies().subscribe((data: any[]) => {
      this.similarMovies = data;
    });
  }
}
