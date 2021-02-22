import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import {BudgetComponent} from '../components/budget/budget.component';
import {AllAccountsComponent} from '../components/all-accounts/all-accounts.component';

const routes: Routes = [
  { path: '', component: SidebarComponent,
  children: [
   { path: '', component: BudgetComponent},
   { path: 'budget', component: BudgetComponent},
   { path: 'accounts', component: AllAccountsComponent},
   // otherwise redirect to home
   { path: '**', redirectTo: '' }
  ]
 },
];
export const AppRoutingModule = RouterModule.forRoot(routes);
