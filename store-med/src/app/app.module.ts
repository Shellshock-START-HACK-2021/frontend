import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { MaindashboardComponent } from './dashboard/main-dashboard/maindashboard.component';
import { LoadingComponent } from './dashboard/loading/loading.component';
import { SummaryComponent } from './dashboard/summary/summary.component';
import { SummarySaveComponent } from './summary-save/summary-save.component';





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    SidenavComponent,
    MaindashboardComponent,
    LoadingComponent,
    SummaryComponent,
    SummarySaveComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
