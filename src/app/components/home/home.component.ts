import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  topMovies: any[] = [
    {
      id:1,
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie Title 1',
      description: 'Very nice movie',
    },
    {
      id:2,
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie Title 2',
      description: 'For family movie',
    },
  ];

  fanFavories: any[] = [
    {
      id:1,
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie Title 1',
      actors: 'Movie Actors 1',
      year: '2020',
      rate: 9.8,
      rank: 1,
    },
    {
      id:2,
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie Title 2',
      actors: 'Movie Actors 2',
      year: '2021',
      rate: 9.6,
      rank: 2,
    },
    {
      id:3,
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie Title 3',
      actors: 'Movie Actors 3',
      year: '2022',
      rate: 8.6,
      rank: 3,
    },
    {
      id:4,
      imageUrl: '../../../assets/images/card-image.png',
      title: 'Movie Title 4',
      actors: 'Movie Actors 4',
      year: '2023',
      rate: 8.1,
      rank: 4,
    },
  ];

  currentStyles : Record<string, string> = {

  }
  isCentered = false;
  isSuccess = false;
  isLarge = true;

  constructor() {
    this.currentStyles = {
      'text-align':this.isCentered ? 'center' : '',
      'color':this.isSuccess ? 'green' : 'red',
      'font-size':this.isLarge ? 'large': 'small'
    }
  }
}
