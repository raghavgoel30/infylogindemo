import { Component, OnInit } from '@angular/core';
import { AddmissionSreviceService } from '../addmission-srevice.service';
@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.css']
})
export class TeacherDetailsComponent implements OnInit {

  teachers:any
  message:any

  constructor(private service:AddmissionSreviceService) { }

  ngOnInit(): void {
    let response=this.service.getTeacher();
    response.subscribe(data=>{this.teachers=data})
  }
  
    

  public deleteTeacher(id){
    let response=this.service.deleteTeacher(id);
    response.subscribe(data=>{this.message=data})
  }

  public refresh(){
    window.location.reload();
  }
}
