import { Component } from '@angular/core';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrls: ['./details-movies.component.css']
})
export class DetailsMoviesComponent {
  similarMovies : any[] = [
    {
      id:1,
      imageUrl:'../../../assets/images/card-image.png',
      title:'Movie #1 Title',
      rate:9.5
    },
    {
      id:1,
      imageUrl:'../../../assets/images/card-image.png',
      title:'Movie #1 Title',
      rate:9.5
    },
    {
      id:1,
      imageUrl:'../../../assets/images/card-image.png',
      title:'Movie #1 Title',
      rate:9.5
    },
    {
      id:1,
      imageUrl:'../../../assets/images/card-image.png',
      title:'Movie #1 Title',
      rate:9.5
    },
    {
      id:1,
      imageUrl:'../../../assets/images/card-image.png',
      title:'Movie #1 Title',
      rate:9.5
    },
    {
      id:1,
      imageUrl:'../../../assets/images/card-image.png',
      title:'Movie #1 Title',
      rate:9.5
    },
    {
      id:1,
      imageUrl:'../../../assets/images/card-image.png',
      title:'Movie #1 Title',
      rate:9.5
    }
  ]
}
