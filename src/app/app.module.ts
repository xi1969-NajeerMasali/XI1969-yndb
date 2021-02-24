import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetComponent } from './components/budget/budget.component';
import { AllAccountsComponent } from './components/all-accounts/all-accounts.component';
import { AppRoutingModule } from './routing/app.routing';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './helpers/auth-interceptor.service';
import { PayeeComponent } from './components/payee/payee.component';
import { PayeeDetailsComponent } from './components/payee-details/payee-details.component';
@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    AllAccountsComponent,
    SidebarComponent,
    PayeeComponent,
    PayeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
