import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aoaa';
  constructor (private authService:AuthorizationService, 
    private router:Router) {}

    
}
