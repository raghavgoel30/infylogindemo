import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddmissionSreviceService } from '../addmission-srevice.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin:Admin=new Admin();
msg:any

  constructor(private service:AddmissionSreviceService,private router:Router ) { }

  ngOnInit(): void {
  }

  public login(){
    
    let response=this.service.login(this.admin);
    response.subscribe(data=>{this.router.navigate(["/admin"])},
    error=>{this.msg="Wrong Credentials"})

  }

}
