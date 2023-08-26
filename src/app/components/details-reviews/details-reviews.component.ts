import { Component } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent {
  movieRates: any[] = [
    {
      id:1,
      rate:7.5,
      review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odit  dolores numquam repellendus consectetur eligendi non sunt voluptate consequatur veritatis',
      author:'author',
      usefulCount:100,
      totalCount:120
    },
    {
      id:1,
      rate:9.5,
      review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odit  dolores numquam repellendus consectetur eligendi non sunt voluptate consequatur veritatis',
      author:'author',
      usefulCount:100,
      totalCount:120
    },
    {
      id:1,
      rate:8.5,
      review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odit  dolores numquam repellendus consectetur eligendi non sunt voluptate consequatur veritatis',
      author:'author',
      usefulCount:100,
      totalCount:120
    }
  ]
}
