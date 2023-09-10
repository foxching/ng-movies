import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrls: ['./details-actors.component.css'],
})
export class DetailsActorsComponent {
  actors : any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.loadMovieActors();
  }

  loadMovieActors() {
    this.httpClient
      .get<any[]>('assets/data/movieActors.json')
      .subscribe((data : any[]) => {
        this.actors = data;
      });
  }
}
