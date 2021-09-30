import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterTeacherComponent } from './register-teacher/register-teacher.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students/students.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {path:"students",component:StudentsComponent},
  {path:"teacher",component:RegisterTeacherComponent},
  {path:"studentDetails",component:StudentDetailsComponent},
  {path:"login",component:LoginComponent  },
  {path:"admin",component:AdminComponent},
  {path:"teacherDetails",component:TeacherDetailsComponent},
  {path:"register",component:TeachersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
