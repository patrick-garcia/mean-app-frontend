import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input-date',
  templateUrl: './form-input-date.component.html',
  styleUrls: ['./form-input-date.component.scss']
})
export class FormInputDateComponent implements OnInit {
  @Input() control1: FormControl;
  @Input() label: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
