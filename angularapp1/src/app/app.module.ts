import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MarvelComponent } from './movie/marvel.component';
import { DcComponent } from './movie/dc.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login.component';
import { RoutesComponent } from './movie/routes.component';
import { ListuserComponent } from './movie/listuser.component';
import { UserService }  from './movie/user.service'



@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    DcComponent,
    LoginComponent,
    RoutesComponent,
    ListuserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
