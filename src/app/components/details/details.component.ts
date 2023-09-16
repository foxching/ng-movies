import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  movieId = '';

  stars = [];
  genres = [];
  directors = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {
    this.activatedRoute.params.subscribe((p) => {
      this.movieId = p['id'];
    });
  }

  ngOnInit(): void {
    this.loadMovieSummary();
  }

  loadMovieSummary() {
    this.movieService.getMovieSummary().subscribe((data: any) => {
      this.stars = data.stars;
      this.genres = data.genres;
      this.directors = data.directors;
    });
  }
}
