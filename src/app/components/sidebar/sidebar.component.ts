import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  budgetId: any;

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.length) {
      this.budgetId = localStorage.getItem('budgetId');
    }
  }
  // go to accounts
  public goToAccounts() {
    this.router.navigate([`accounts/${this.budgetId}`]);
  }
  // go to budget
  public goToBudget(){
    this.router.navigate([`budget/${this.budgetId}`]);
  }
  // go to payee
  public goToPayee(){
    this.router.navigate([`payee/${this.budgetId}`]);
  }

}
