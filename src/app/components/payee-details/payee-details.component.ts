import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YnabService } from 'src/app/services/ynab.service';

@Component({
  selector: 'app-payee-details',
  templateUrl: './payee-details.component.html',
  styleUrls: ['./payee-details.component.css']
})
export class PayeeDetailsComponent implements OnInit {
  budgetId: any;
  payeeId: any;
  payeeTransactions: any;

  constructor(private ynabService: YnabService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (localStorage.length) {
      this.budgetId = localStorage.getItem('budgetId');
    }
    this.payeeId = this.route.snapshot.params.id;
    this.getPayeeTransactionDetails(this.budgetId, this.payeeId);
  }

  getPayeeTransactionDetails(budgetId:any, payeeId:any) {
    console.log('bbb', payeeId)
    this.ynabService.getPayeeTransaction(budgetId, payeeId).subscribe((transaction: any) => {
      console.log('>>>>>>>>>>>>>>>>>>', transaction)
      this.payeeTransactions = transaction.data.transactions;
    });
  }


}
