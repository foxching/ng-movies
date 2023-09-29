import { Component } from '@angular/core';
import { Feedback } from 'src/app/model/Feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
    feedback : Feedback = new Feedback('', '', 3,'', '')

    
  ngOnInit(): void {
    console.log('app initialized')
  }

    submitFeedback(){
      console.log('feedback', this.feedback)
    }
}
