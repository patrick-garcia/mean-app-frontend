import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {
  @Input() control1: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

  errorCheck() {
    const { errors, touched, dirty } = this.control1;
    return errors && touched && dirty;
  }
}
