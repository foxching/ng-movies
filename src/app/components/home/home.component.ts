import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  topMovies: any[] = [];

  fanFavories: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFanFavoritesMovies();
    this.getTopMovies();
  }

  getFanFavoritesMovies() {
    this.http
      .get<any[]>('assets/data/fanFavoriteMovies.json')
      .subscribe((data : any[]) => {
        this.fanFavories = data;
      });
  }

  getTopMovies() {
    this.http
      .get<any[]>('assets/data/topMovies.json')
      .subscribe((data: any[]) => {
        this.topMovies = data;
      });
  }
}
