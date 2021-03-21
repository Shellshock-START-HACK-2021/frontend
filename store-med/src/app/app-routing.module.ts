import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralAuthGuard } from './authentication.guard';
import { LoadingComponent } from './dashboard/loading/loading.component';
import { SummaryComponent } from './dashboard/summary/summary.component';
import { SummarySaveComponent } from './summary-save/summary-save.component';

const routes: Routes = [
  {
    path: 'dashboard/summary/save',
    component: SummarySaveComponent,
  },
  {
    path: 'dashboard/summary',
    component: SummaryComponent,
  },
  {
    path: 'dashboard/loading',
    component: LoadingComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    /* canActivate: [GeneralAuthGuard], */
  },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: '', component: HomepageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
