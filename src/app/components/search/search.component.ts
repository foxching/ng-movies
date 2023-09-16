import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  movieTitle = '';
  searchResults: any[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    this._activatedRoute.params.subscribe((p) => {
      this.movieTitle = p['movieTitle'];
    });
  }
  ngOnInit(): void {
    this.searchMovies();
  }

  // searchMovies() {
  //   this.httpClient
  //     .get<any[]>('assets/data/movieSearch.json')
  //     .subscribe((data: any[]) => {
  //       this.searchResults = data;
  //     });
  // }

  searchMovies() {
    this.httpClient.get<any[]>('assets/data/movieSearch.json').subscribe({
      next: (data:any[]) => {
        this.searchResults = data;
      },
      error: (error) => {
        console.log('Error loading data', error);
      },
      complete: () => {
        console.log('Request completed successfully');
      },
    });
  }


}
