import { Component, OnInit } from '@angular/core';
import { YnabService } from 'src/app/services/ynab.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor(private ynabService: YnabService) { }

  ngOnInit() {
    this.getBudgetData()
  }

  getBudgetData(){
    this.ynabService.getBudgetDetails().subscribe(res => {
      console.log('>>>>>>>>>>>>>>', res)
    })
  }

}
