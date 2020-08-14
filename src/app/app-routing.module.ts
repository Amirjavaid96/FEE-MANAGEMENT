import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateAccountComponent} from './create-account/create-account.component'
import {LoginComponent} from './login/login.component'
import{NavbarComponent} from './navbar/navbar.component'
import {AddstudentComponent} from './addstudent/addstudent.component'

  import { from } from 'rxjs';



const routes: Routes = 
[
  {path:"",component:LoginComponent},
  {path:"registration",component:CreateAccountComponent},
  {path:"firstpage",component:NavbarComponent},
  {path:"add",component:AddstudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
