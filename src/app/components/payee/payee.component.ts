import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YnabService } from 'src/app/services/ynab.service';

@Component({
  selector: 'app-payee',
  templateUrl: './payee.component.html',
  styleUrls: ['./payee.component.css']
})
export class PayeeComponent implements OnInit {
  payeeList: any;
  budgetId: string;

  constructor(private ynabService: YnabService,
    private router: Router) { }

  ngOnInit() {
    if (localStorage.length) {
      //get budget ID
      this.budgetId = localStorage.getItem('budgetId');
      this.getPayeeList(this.budgetId)
    }
  }
  // get payeeList
  getPayeeList(budgetId) {
    this.ynabService.getPayeeList(budgetId).subscribe((payee: any) => {
      console.log("payees", payee)
      this.payeeList = payee.data.payees;
    });
  }
  // payee details
  goToPayeeDetails(payeeId: any) {
    console.log('p', payeeId)
    this.router.navigate([`payee/${payeeId}/payee-details`]);
  }

}
