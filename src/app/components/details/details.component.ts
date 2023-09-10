import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private _activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    this._activatedRoute.params.subscribe((p) => {
      this.movieId = p['id'];
    });
  }

  ngOnInit(): void {
    this.loadMovieSummary();
  }

  loadMovieSummary() {
    this.httpClient.get<any>('assets/data/movieSummary.json').subscribe((data:any) => {
      this.stars = data.stars;
      this.genres = data.genres;
      this.directors = data.directors;
    })
  }
}
