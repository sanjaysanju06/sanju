import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { UserService } from './movie/user.service';
import { Iuser } from './movie/Iuser';
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;
  user: Iuser;

  constructor(private fb: FormBuilder,private router: Router,
              private route:ActivatedRoute,private userservice:UserService) {}
  

  ngOnInit() {
    this.createForm();
    this.route.paramMap.subscribe(params =>{
       const usId=+params.get('id');
       if(usId){
         this.getUserId(usId);
       }
    }); 
  }

  getUserId(id:number){
    this.userservice.getEmployee(id).subscribe(
     (user:Iuser)=>{
     this.edituser(user);
     this.user=user;
    },
     (err:any)=>console.log(err)

    );

  }

  edituser(user:Iuser)
  {
    this.reactiveForm.patchValue({
      name:user.name,
      email:user.email,
      password:user.password
      

    });
  }
  createForm() {
    this.reactiveForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }
  onSubmit(){
    console.log(this.reactiveForm.value.name);
   if(this.reactiveForm.value.name == 'admin' && this.reactiveForm.value.password == 'admin'){
     this.router.navigate(["routes"]);
    }else {
      alert("Invalid credentials");
    }

}
updatedata():void
{
 this.updateuserdata();
  this.userservice.updateEmployee(this.user).subscribe();  
  this.router.navigate(["listuser"]);
}

updateuserdata()
{
this.user.name= this.reactiveForm.value.name;
this.user.email=this.reactiveForm.value.email;
this.user.password=this.reactiveForm.value.password;
}
}