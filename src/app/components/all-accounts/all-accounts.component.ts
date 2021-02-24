import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { YnabService } from 'src/app/services/ynab.service';

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent implements OnInit {
  budgetId: any;
  allAccounts: any;
  formVisible =  false;
  createNewAccountForm: FormGroup;
  todaysDate= new Date();
  isDeleted: any;

  constructor(private ynabService: YnabService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.createNewAccountForm = this.formBuilder.group({
      name:['']
    })
   }

  ngOnInit() {
    if (localStorage.length) {
      this.budgetId = localStorage.getItem('budgetId');
      this.getAllAccountsData(this.budgetId)
    }
  }

  getAllAccountsData(budgetId: any){
    this.ynabService.getAllAccounts(budgetId).subscribe((res: any) => {
      console.log('res', res)
      if(res && res.data && res.data.accounts){
        this.allAccounts = res.data.accounts;
      }
    })
  }
  createNewAccount(){
    this.formVisible = true
  }
  // create new account
  onSubmit(){
    const formatData = {
      "account": {
        "name": this.createNewAccountForm.value.name,
        "type": "checking",
        "balance": 100
      }
    }
    this.ynabService.createNewAccount(this.budgetId, formatData).subscribe((res:any) => {
      // console.log('res', res)
      this.getAllAccountsData(this.budgetId)
      this.formVisible = false
    })
  }

}
