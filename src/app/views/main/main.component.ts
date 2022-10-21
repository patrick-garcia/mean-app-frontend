import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import PolicyModel from 'src/app/models/policyModel';
import { PolicyService } from 'src/app/services/policy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  displayedColumns: string[] = ['_id', 'firstName', 'lastName', 'dateOfBirth', 'startDate', 'endDate', 'description', 'action'];
  policies: PolicyModel[] = [];
  deleteModalIsChecked: boolean = false;

  constructor(private policyService: PolicyService, private router: Router) {}

  ngOnInit(): void {
    this.policyService.getAllPolicy()
      .subscribe((data: PolicyModel[]) => {
        this.policies = data;
      })
  }

  handleEditBtn(policyNumber: string) {
    this.router.navigate(['/edit-policy', policyNumber]);
  }

  handleDeleteBtn(policyNumber: string) {
    this.policyService.deletePolicy(policyNumber)
      .subscribe((data: PolicyModel) => {
        this.policies = this.policies.filter((item => {
          return item._id !== data._id;
        }))
      })
  }
}
