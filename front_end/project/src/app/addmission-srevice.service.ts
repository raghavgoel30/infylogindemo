import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AddmissionSreviceService {

  constructor(private http:HttpClient) { }

  public getTeacher(){
    return this.http.get("http://localhost:8080/teachers");
  }

  public addTeacher(teacher){
    return this.http.post("http://localhost:8080/addTeacher",teacher,{responseType:"text" as "json"});
  }

  public deleteTeacher(id){
    return this.http.get("http://localhost:8080/deleteTeacher/"+id);
  }

  public getStudent(){
    return this.http.get("http://localhost:8080/students");
  }

  public addStudent(student){
    return this.http.post("http://localhost:8080/addStudent",student,{responseType:"text" as "json"});
  }

  public deleteStudent(id){
    return this.http.get("http://localhost:8080/deleteStudent/"+id);
  }

  public login(admin){
    return this.http.post("http://localhost:8080/login",admin,{responseType:"text" as "json"})
  }
}
