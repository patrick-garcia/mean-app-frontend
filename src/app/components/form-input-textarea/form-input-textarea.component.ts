import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input-textarea',
  templateUrl: './form-input-textarea.component.html',
  styleUrls: ['./form-input-textarea.component.scss']
})
export class FormInputTextareaComponent implements OnInit {
  @Input() control1: FormControl;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
