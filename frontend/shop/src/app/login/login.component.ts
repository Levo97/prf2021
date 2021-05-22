import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../auth/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

name: string;
password: string;

  constructor(private AuthenticationService: AuthenticationServiceService, private router: Router) {
    this.name=""
    this.password=""

   }


   ngOnInit(): void {
    if(localStorage.getItem("user")){
      localStorage.removeItem("user")
    }
  }

  login(){
    if(this.name !="" && this.password !=""){
      this.AuthenticationService.login(this.name, this.password).subscribe(msg =>{
        console.log(msg)
        localStorage.setItem('user', this.name)
        this.router.navigate(['home']);
      }, (err) =>{
        console.log(err)
      })
    }
  }

}
