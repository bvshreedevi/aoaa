import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutherizationRoutingModule } from './autherization/autherization-routing.module';
import { AutherizationModule } from './autherization/autherization.module';
import { FrontPageComponent } from './autherization/front-page/front-page.component';
import { LoginComponent } from './autherization/login/login.component';
import { RegisterComponent } from './autherization/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthorizationService } from './services/authorization.service';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FrontPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AutherizationModule,
    AutherizationRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuardService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
