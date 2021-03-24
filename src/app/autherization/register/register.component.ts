import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      regName: ['', [Validators.required]],
      regUserName:['', [Validators.required]],
      regEmail:['', [Validators.required]],
      regContact:['', [Validators.required]],
      regBankName:[''],
      regBankAddress:[''],
      regPassword: ['', [Validators.required]],
      regConfirmPassword: ''
    })
  }
  register(){
    console.log(this.registerForm.value);
    
   /* this.apiService.register(this.registerForm.value)
        .subscribe( res => {         
          this.message = 'Registered Successfully!';
          this.registerForm.reset()
          this.initializeFormGroup();
        },
        err => {
          this.message = 'Not Registered';
        }        
        
        ); */
  }
}
