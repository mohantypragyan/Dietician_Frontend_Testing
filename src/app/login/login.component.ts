import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth/auth.service';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;

  submit=false;
  loading=false;
  errorMessage = "";
  
  constructor(private fb:FormBuilder, private auth:AuthService) { }

  ngOnInit(): void {
    this.loginForm= this.fb.group({
      userLoginEmail : ['',Validators.required],
      password : ['',Validators.required],
    });
  }

  onSubmit() {
    console.log('onSubmit()');
    this.loading=true;
    this.auth.login(this.loginForm.value.userLoginEmail, this.loginForm.value.password)
    .subscribe({
        next:data=>{
            this.auth.storeToken(data.token, data.roles);
            this.auth.canAuthenticate();
        },
      error: data => {
           console.log(data.error.error);
            if (data.error.error=="Unauthorized" ) { // || data.error.message=="INVALID_EMAIL"
                this.errorMessage = "Invalid Credentials!";
            } else{
                this.errorMessage = "Unknown error when logging into this account!";
            }
        }
    }).add(()=>{
        this.loading =false;
        console.log('login process completed!');

    })
  }

}
