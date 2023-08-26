import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  movieId = "";

  stars = ["Star 1", "Star 2", "Start 3"];
  actors = ["Actor 1", "Actor 2", "Actor 3"];
  directors = ["Director 1", "Director 2", "Director 3"];

  constructor(private _activatedRoute: ActivatedRoute) { 
    this._activatedRoute.params.subscribe((p) => {
      this.movieId = p["id"];
    })
  }
  
  ngOnInit():void{
    console.log('ngOnInit')
  }

  ngOnChanges(){
    console.log('ngOnChanges')
  }
}
