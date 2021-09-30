import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddmissionSreviceService } from '../addmission-srevice.service'
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  student:Student = new Student
  message:any
  registerForm:FormGroup

  constructor(private service:AddmissionSreviceService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      name:['',[Validators.required]],
      dob:['',[Validators.required]],
      contactNumber:['',[Validators.required]],
      fatherName:['',[Validators.required]],
      motherName:['',[Validators.required]]
    })
  }

  public addStudent(){
    let response= this.service.addStudent(this.student);
    response.subscribe(data=>{this.message=data})
  }

}
