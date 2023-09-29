import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Feedback } from 'src/app/model/Feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  feedbackForm!: FormGroup;
  
  constructor(private fb:FormBuilder) {
    this.feedbackForm = this.fb.group({
      emailAddress:[''],
      phoneNumber:[1],
      rate:[''],
      feedbackTitle:[''],
      feedback:[],
    })
    
  }

  ngOnInit(): void {
    console.log('app initialized');
  }

  submitFeedback() {
    console.log('feedback', this.feedbackForm.value)
  }
}
