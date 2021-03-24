import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidCredentialMsg: string;
  username:string;
  password:string;
  retUrl:string="login";
  loginForm:FormGroup;

  constructor(private authService: AuthorizationService, 
              private router: Router, 
              private fb: FormBuilder ) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],      
      password: ['', [Validators.required]]      
    })
  }

  onFormSubmit(loginForm) {
    console.log(this.loginForm.value);
    this.authService.login(loginForm).subscribe(
      res => {
        /*console.log(res.token);
        window.localStorage.setItem('token', res.token);*/
        console.log(res);
        if(this.authService.isUserLoggedIn()){
          console.log("admin");
          this.router.navigate(['admin'])
        }
        
      },
      err => {console.log("err")}
     )
    /* this.authService.login(loginForm.value).subscribe(
      res => {
        console.log(res.token);
        window.localStorage.setItem('token', res.token);
        this.router.navigate(['home'])
      },
      err => {console.log("err")}
     )*/
    };
  }

