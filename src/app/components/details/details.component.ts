import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  ngOnInit():void{
    console.log('ngOnInit')
  }

  ngOnChanges(){
    console.log('ngOnChanges')
  }
}
