import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  topMovies: any[] = [];

  fanFavories: any[] = [];

  constructor(private movieService:MoviesService) {}

  ngOnInit(): void {
    this.getFanFavoritesMovies();
    this.getTopMovies();
  }

  getFanFavoritesMovies() {
    this.movieService.getFanFavoritesMovies()
      .subscribe((data : any[]) => {
        this.fanFavories = data;
      });
  }

  getTopMovies() {
    this.movieService.getTopMovies()
      .subscribe((data: any[]) => {
        this.topMovies = data;
      });
  }
}
