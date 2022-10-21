import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { PolicyService } from 'src/app/services/policy.service';
import PolicyModel from 'src/app/models/policyModel';
import { FormatValueService } from 'src/app/services/format-value.service';

@Component({
  selector: 'app-edit-policy',
  templateUrl: './edit-policy.component.html',
  styleUrls: ['./edit-policy.component.scss']
})
export class EditPolicyComponent implements OnInit {
  currPolicyNumber: string = '';
  currPolicyObj: PolicyModel;

  policyForm = new FormGroup({
    policyNumber: new FormControl(''),
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
    dateOfBirth: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    description: new FormControl('')
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private policyService: PolicyService,
    private formatValue: FormatValueService
  ) {

    this.activatedRoute.params.subscribe((params: Params) => {
      this.currPolicyNumber = params.policyid;
    })
  }

  ngOnInit(): void {
    this.policyService.getOnePolicy(this.currPolicyNumber)
      .subscribe((data: PolicyModel) => {
        const { firstName, lastName, dateOfBirth, startDate, endDate, description } = data;

        this.policyForm.patchValue({
          firstName, lastName, description,
          startDate: this.formatValue.date(startDate),
          endDate: this.formatValue.date(endDate),
          dateOfBirth: this.formatValue.date(dateOfBirth),
        })
      })
  }

  onFormSubmit() {
    this.policyService.updatePolicy(this.currPolicyNumber, this.policyForm.value)
      .subscribe(() => {
        this.router.navigate(['/main']);
      })
  }
}
