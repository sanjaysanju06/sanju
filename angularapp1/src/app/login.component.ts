import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {}
  

  ngOnInit() {
    this.createForm();
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
}

