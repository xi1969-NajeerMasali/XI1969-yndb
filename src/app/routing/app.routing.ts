import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import {BudgetComponent} from '../components/budget/budget.component';
import {AllAccountsComponent} from '../components/all-accounts/all-accounts.component';
import { PayeeComponent } from '../components/payee/payee.component';
import { PayeeDetailsComponent } from '../components/payee-details/payee-details.component';

const routes: Routes = [
  { path: '', component: SidebarComponent,
  children: [
   { path: '', component: BudgetComponent},
   { path: 'budget/:id', component: BudgetComponent},
   { path: 'accounts/:id', component: AllAccountsComponent},
   { path: 'payee/:id', component: PayeeComponent},
   {path: 'payee/:id/payee-details', component: PayeeDetailsComponent},
   // otherwise redirect to home
   { path: '**', redirectTo: '' }
  ]
 },
];
export const AppRoutingModule = RouterModule.forRoot(routes);
