import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,  FormsModule  } from '@angular/forms'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MarvelComponent } from './movie/marvel.component';
import { DcComponent } from './movie/dc.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login.component';
import { RoutesComponent } from './movie/routes.component';
import { ListuserComponent } from './movie/listuser.component';
import { UserService }  from './movie/user.service';
import {MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {DataTableModule} from "angular-6-datatable";
import {UserFilter} from "./movie/user.filter"





@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    DcComponent,
    LoginComponent,
    RoutesComponent,
    ListuserComponent,
    UserFilter,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    DataTableModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
