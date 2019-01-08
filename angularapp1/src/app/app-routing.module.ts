import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarvelComponent } from './movie/marvel.component';
import { DcComponent } from './movie/dc.component';
import { LoginComponent } from './login.component';
import { RoutesComponent } from './movie/routes.component';
import { ListuserComponent } from './movie/listuser.component';

const appRoutes: Routes = [
  { path: 'marvel', component: MarvelComponent },
  { path: 'dc', component: DcComponent },
  {path:'login',component:LoginComponent},
  {path:'routes',component:RoutesComponent},
  {path:'listuser',component:ListuserComponent},
  {path:'loginedit/:id',component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }



