import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { MarvelComponent } from './movie/marvel.component';
import { DcComponent } from './movie/dc.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login.component';
import { RoutesComponent } from './movie/routes.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvelComponent,
    DcComponent,
    LoginComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
