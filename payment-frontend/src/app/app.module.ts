import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavitemsComponent } from './navitems/navitems.component';
import { DataService } from './services/data.service';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransferComponent } from './transfer/transfer.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LogoutComponent } from './logout/logout.component';
import { SuccessComponent } from './success/success.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NavitemsComponent,
    AboutusComponent,
    DashboardComponent,
    TransactionsComponent,
    TransferComponent,
    DropdownComponent,
    LogoutComponent,
    SuccessComponent,
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      
    {
      path:'login', component:LoginComponent
    },
    {
      path:'',component:AboutusComponent
    },
    {
      path:'dashboard',component:DashboardComponent
    },
    {
      path:'transactions',component:TransactionsComponent
    },
    {
      path:'transfer',component:TransferComponent
    },
    {
      path:'about',component:AboutusComponent
    },
    {
      path:'logout',component:LogoutComponent
    },
    {
      path:'success',component:SuccessComponent
    }
    
  
  ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
