import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import PolicyModel from '../models/policyModel';

@Injectable({
  providedIn: 'root'
})

export class ApiConfigService {
  API_BASE_URL = 'http://127.0.0.1:3010'

  constructor(private httpClient: HttpClient) { }

  getAllAPI(url: string) {
    return this.httpClient.get<PolicyModel[]>(`${this.API_BASE_URL}/${url}`);
  }

  getOneAPI(url: string) {
    return this.httpClient.get(`${this.API_BASE_URL}/${url}`);
  }  

  postAPI(url: string, data: Object) {
    return this.httpClient.post(`${this.API_BASE_URL}/${url}`, data);
  }

  putAPI(url: string, data: Object) {
    return this.httpClient.put(`${this.API_BASE_URL}/${url}`, data);
  }

  deleteAPI(url: string) {
    return this.httpClient.delete(`${this.API_BASE_URL}/${url}`);
  }
}
