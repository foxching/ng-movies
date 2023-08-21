import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  movieId = ""

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
