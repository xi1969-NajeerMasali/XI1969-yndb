import { Component, OnInit } from '@angular/core';
import { YnabService } from 'src/app/services/ynab.service';

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent implements OnInit {

  constructor(private ynabService: YnabService) { }

  ngOnInit() {
  }

  getAllAccountsData(){
    this.ynabService.getAllAccounts().subscribe(res => {
      console.log('>>>>>>>>>>>acc', res)
    })
  }

}
