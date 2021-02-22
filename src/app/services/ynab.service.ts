import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class YnabService {

  constructor(private http: HttpClient) { }

  getBudgetDetails() {
    const headers = new HttpHeaders
    headers.append('content-type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(`${environment.budgetUrl}`, {'headers':headers});
  }

  getAllAccounts() {
    return this.http.get(`${environment.budgetUrl}`);
  }
}
