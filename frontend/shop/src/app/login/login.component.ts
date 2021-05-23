import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../auth/authentication-service.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//User: User;
name: string;
password: string;
regname: string;
regpassword: string;

  constructor(private AuthenticationService: AuthenticationServiceService, private router: Router) {
    this.name=""
    this.password=""
    this.regname=""
    this.regpassword=""
   }


   ngOnInit(): void {
    if(localStorage.getItem("user")){
      localStorage.removeItem("user")
    }
  }

 /* reg(){
    if(this.regname !="" && this.regpassword !=""){
     this.User.name=this.regname;
     this.User.password=this.regpassword;
     this.User.save();

    }
  }*/


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
