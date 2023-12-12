import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css'],
})
export class UpdateEventComponent implements OnInit {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
  updateFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.updateFormGroup = this.fb.group({
      eventName: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      url: ['', Validators.required],
    });
  }

  onCancel(): void {
    this.updateFormGroup.reset();
  }

  ngOnInit(): void {}
}
