import { Component, OnInit } from '@angular/core';
import { AddmissionSreviceService} from '../addmission-srevice.service'

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  msg:any
  students:any

  constructor(private service:AddmissionSreviceService) { }

  ngOnInit(): void {
    let response = this.service.getStudent();
    response.subscribe(data=>{this.students=data})
  }

  

  public deleteStudent(id){
    let response = this.service.deleteStudent(id);
    response.subscribe(data=>{this.msg=data})
  }

  public refresh(){
    window.location.reload();
  }

}
