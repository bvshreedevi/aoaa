import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './autherization/front-page/front-page.component';
import { LoginComponent } from './autherization/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path:'home', component:FrontPageComponent},
  { path: 'admin', component: HomeComponent},
  /*{ path: 'admin', component: HomeComponent, canActivate : [AuthGuardService] },*/
  { path: '', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
