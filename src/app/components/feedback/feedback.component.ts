import { Component } from '@angular/core';
import { FormBuilder, FormControl,  FormGroup, Validators } from '@angular/forms';
import { Feedback } from 'src/app/model/Feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  feedbackForm!: FormGroup;

  constructor() {
    
  }

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+')]),
      rate: new FormControl(8, [Validators.min(0), Validators.max(10)]),
      feedbackTitle: new FormControl('', [Validators.required]),
      feedback:new FormControl('',[Validators.required])
    })
  }

  submitFeedback() {
    console.log('feedback', this.feedbackForm.value);
  }
}
