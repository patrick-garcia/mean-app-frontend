import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PolicyService } from 'src/app/services/policy.service';
import PolicyModel from 'src/app/models/policyModel';
import { FormatValueService } from 'src/app/services/format-value.service';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.scss']
})
export class AddPolicyComponent implements OnInit {
  currDate = new Date().toISOString();

  policyForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(15),
    ]),
    dateOfBirth: new FormControl(this.formatValue.date(this.currDate)),
    startDate: new FormControl(this.formatValue.date(this.currDate)),
    endDate: new FormControl(this.formatValue.date(this.currDate)),
    description: new FormControl('')
  });

  constructor(
    private policyService: PolicyService,
    private router: Router,
    private formatValue: FormatValueService
  ) {}

  ngOnInit(): void {}

  onFormSubmit() {
    this.policyService.createNewPolicy(this.policyForm.value)
      .subscribe((data) => {
        this.router.navigate(['/main']);
      })
  }
}
