import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutherizationRoutingModule } from './autherization-routing.module';
import { FrontPageComponent } from './front-page/front-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [],
  
  imports: [
    CommonModule,
    AutherizationRoutingModule
  ],
  exports:[
    AutherizationRoutingModule
  ]

})
export class AutherizationModule { }
