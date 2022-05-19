import { DashboardComponent } from './admin-dashboard/index/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ForgetComponent } from './auth/forget/forget.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: 'courses', loadChildren: () => import('./course/course.module').then(m => m.CourseModule) },
{path: 'login', component:LoginComponent},
{path:'logout',component:LogoutComponent},
{path:'registre',component:NewUserComponent},
{path:'forget-password',component:ForgetComponent},
{path:'',component:HomeComponent},
{path :'admin/dashboard',component:DashboardComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
