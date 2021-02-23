import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YnabService {

  constructor(private http: HttpClient) { }

  getCategoriesDetails() {
    return this.http.get(`${environment.baseUrlCategory}`);
  }
  getAllAccounts(budgetId: any) {
    return this.http.get(`${environment.baseUrlAllAccounts}`, budgetId);
  }
  getListOfbudgets(){
    return this.http.get(`${environment.baseUrlBudget}`);
  }
  createNewAccount(budgetId: any, formData:any) {
    console.log('form')
    return this.http.post(`${environment.baseUrl}/budgets/${budgetId}/accounts`, formData)
  }


}
