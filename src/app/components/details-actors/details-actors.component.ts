import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrls: ['./details-actors.component.css'],
})
export class DetailsActorsComponent {
  actors: any[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.loadMovieActors();
  }

  loadMovieActors() {
    this.movieService.getMovieActors().subscribe((data: any[]) => {
      this.actors = data;
    });
  }
}
