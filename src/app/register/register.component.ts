import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private router:Router, private comServ:CommonService) { }
  register: any = FormGroup;
  id:any = 10;
  ngOnInit(): void{
    this.register = this.fb.group({
      password:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])]
    })
  } 

  registerSubmit(data:any){
      console.log(data);
      let dataToPass={
        email:data.email,
        password:data.password,
        id:this.id++
      }
      this.comServ.addUser(dataToPass).subscribe((data:any)=>{
        console.log(data);
      })
  }
 
 gotoLogin(){
  this.router.navigate(['login']);
 }
  
}
