import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YnabService {

  constructor(private http: HttpClient) { }

  getCategoriesDetails(budgetId: any) {
    return this.http.get(`${environment.baseUrl}/budgets/${budgetId}/categories`);
  }
  getAllAccounts(budgetId: any) {
    return this.http.get(`${environment.baseUrl}/budgets/${budgetId}/accounts`, );
  }
  getListOfbudgets() {
    return this.http.get(`${environment.baseUrl}/budgets`);
  }
  createNewAccount(budgetId: any, formData:any) {
    console.log('form')
    return this.http.post(`${environment.baseUrl}/budgets/${budgetId}/accounts`, formData)
  }
  getPayeeList(budgetId: any) {
    return this.http.get(`${environment.baseUrl}/budgets/${budgetId}/payees`);
  }
  getPayeeTransaction(budgetId: any, payeeId:any) {
    console.log('serv payid', payeeId)
    return this.http.get(`${environment.baseUrl}/budgets/${budgetId}/payees/${payeeId}/transactions`);
  }
  getPayeeDetails(budgetId: any, payeeId: any) {
    return this.http.get(`${environment.baseUrl}/budgets/${budgetId}/payees/${payeeId}`);
  }

}
