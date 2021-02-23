import { Component, OnInit } from '@angular/core';
import { YnabService } from 'src/app/services/ynab.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  category_groups:any
  budgetId: any;
  budgetList: any;
  constructor(private ynabService: YnabService) { }

  ngOnInit() {
    this.getlistOfBudgets()
  }

  getCategoriesDetails(){
    this.ynabService.getCategoriesDetails().subscribe((res:any )=> {
      console.log('>>>>>>>>>>>>>>', res.data.category_groups)
      if(res && res.data && res.data.category_groups){
        this.category_groups = res.data.category_groups
        res.data.category_groups.forEach((e: any) => {
          e.selected = false;
        })
        this.category_groups = res.data.category_groups;
        res.data.category_groups.forEach((e: any) => {
          e.categories.forEach(e => {
          e.selected = false;
          });
        })
      }
    })
  }

  checkedCategory(data){
    console.log('data', data)
  }

  getlistOfBudgets(){
    this.ynabService.getListOfbudgets().subscribe((res: any) => {
      if(res && res.data && res.data.budgets)
      this.budgetList = res.data.budgets
      console.log('>>>>>>>>>>>acc', this.budgetList)
    })
  }

  goToBudgetDetails(){
    this.getCategoriesDetails()
  }

}
