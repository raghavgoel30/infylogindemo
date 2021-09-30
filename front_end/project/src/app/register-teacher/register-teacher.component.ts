import { Component, OnInit } from '@angular/core';
import { AddmissionSreviceService } from '../addmission-srevice.service';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {

  teacher:Teacher=new Teacher();
  message:any

  constructor(private service:AddmissionSreviceService) { }

  ngOnInit(): void {
  }

  public addTeacher(){
    let response=this.service.addTeacher(this.teacher);
    response.subscribe(data=>{this.message=data})
  }

}
