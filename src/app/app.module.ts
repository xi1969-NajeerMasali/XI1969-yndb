import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetComponent } from './components/budget/budget.component';
import { AllAccountsComponent } from './components/all-accounts/all-accounts.component';
import { AppRoutingModule } from './routing/app.routing';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BudgetSummaryDetailsComponent } from './components/budget-summary-details/budget-summary-details.component';
import { AccountSummaryDetailsComponent } from './components/account-summary-details/account-summary-details.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    AllAccountsComponent,
    SidebarComponent,
    BudgetSummaryDetailsComponent,
    AccountSummaryDetailsComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
