import { Component, OnInit } from '@angular/core';
import { Iuser } from './Iuser';
import { UserService } from './user.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
 user:Iuser[];
  constructor(private _userservice: UserService,
              private _router:Router,
              ) { }

  ngOnInit() {
    this._userservice.getEmployees().subscribe(
      (listusers)=>this.user=listusers,
      (err) =>console.log(err)

    ); 
   }

   editButtonClick(userId:number){
     this._router.navigate(['/loginedit',userId]);


   }

}
