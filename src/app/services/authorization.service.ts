import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { map } from "rxjs/operators";
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

    private isloggedIn: boolean;
    private userName:string;
    private uname = "shree";
    private pwd = "1234";
 
    constructor() {
        
    }
 
    /*login(username: string, password:string) {
 
        //Assuming users are provided the correct credentials.
        //In real app you will query the database to verify.
        this.username =='shreedevi';
        this.password =='1234'
        this.isloggedIn=true;
        this.userName=username;
        return of(this.isloggedIn);
    }*/
    login(userdata) {
        if(userdata.value.username == this.uname && userdata.value.password == this.pwd){
              this.isloggedIn=true;              
              console.log("true");
              return of(this.isloggedIn);
           }
           else {
            console.log("false " + userdata.value.username);
            this.isloggedIn=false;   
            return of(this.isloggedIn);
           }
    }
    isUserLoggedIn(): boolean {
        return this.isloggedIn;
    }
 
    isAdminUser():boolean {
        if (this.userName=='Admin') {
            return true; 
        }
        return false;
    }
    
    logoutUser(): void{
        this.isloggedIn = false;
    }
 
} 