import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login:any = FormGroup 
  users:any = [];
  constructor(private fb: FormBuilder, private router:Router, private commserv:CommonService) {
  }

  ngOnInit(): void{
    this.login = this.fb.group({
      password:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])]
    })

    this.commserv.getUser().subscribe((data:any)=>{
      this.users = data;
    })

  } 

  loginSubmit(data:any){
    
    if(data.email){
      this.users.forEach((item:any) =>{
        if(item.email == data.email && item.password == data.password){

          localStorage.setItem("isLogged","true")
          this.router.navigate(['home']);

        }
    else{
      localStorage.clear();
    }
      })
    }


  }

 gotoSignup(){
  this.router.navigate(['register']);
 }
  

}