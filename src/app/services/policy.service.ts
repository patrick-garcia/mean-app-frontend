import { Injectable } from '@angular/core';

import PolicyModel from '../models/policyModel';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private apiConfigService: ApiConfigService) { }

  getAllPolicy() {
    return this.apiConfigService.getAllAPI(`insurancepolicy`);
  }

  getOnePolicy(policyId: string) {
    return this.apiConfigService.getOneAPI(`insurancepolicy/${policyId}`);
  }

  createNewPolicy(dataObj: PolicyModel) {
    return this.apiConfigService.postAPI(`insurancepolicy`, dataObj);
  }

  updatePolicy(policyId: string, dataObj: PolicyModel) {
    return this.apiConfigService.putAPI(`insurancepolicy/${policyId}`, dataObj);
  }

  deletePolicy(policyId: string) {
    return this.apiConfigService.deleteAPI(`insurancepolicy/${policyId}`);
  }
}
