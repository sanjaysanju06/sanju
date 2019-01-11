import { Component, OnInit } from '@angular/core';
import { Iuser } from './Iuser';
import { UserService } from './user.service';
import {  Router } from '@angular/router';
import {PageEvent,MatFormFieldModule,MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule ,FormBuilder, FormGroup} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {   MatSortModule,MatTableDataSource} from "@angular/material";





@NgModule({
  imports: [
      MatFormFieldModule,
      MatInputModule,
      FormsModule,
      MatPaginatorModule,
      PageEvent,
      MatTableModule,
      ReactiveFormsModule,
      FormControl,
      FormBuilder, 
      FormGroup,
      MatSortModule,
      MatTableDataSource
      ]
})

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
 
export class ListuserComponent implements OnInit {
 user:Iuser[];
 lengths = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  private allItems: any[];
  pager: any = {};
  pagedItems: any[];
  constructor(private _userservice: UserService,
              private _router:Router            ) { }

  ngOnInit() {
    this._userservice.getEmployees().subscribe(
      (listusers)=>this.user=listusers,
      (err) =>console.log(err)

    ); 
   }

   
   
  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }
}
