import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FrontPageComponent } from './front-page/front-page.component';

 const routes:Routes =[
   /*{ path:'login', component:FrontPageComponent},
   
   { path:'login1', component:LoginComponent},
   { path:'register', component:RegisterComponent},
   { path:'', redirectTo:'login', pathMatch:'full'},*/
 ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
    
  ]
})
export class AutherizationRoutingModule { }
