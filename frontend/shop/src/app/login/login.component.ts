import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../auth/authentication-service.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
name: string;
password: string;
regname: string;
regpassword: string;

  constructor(private AuthenticationService: AuthenticationServiceService, private router: Router, private http : HttpClient) {
    this.name=""
    this.password=""
    this.regname=""
    this.regpassword=""
   }


   ngOnInit(): void {
    if(localStorage.getItem("user") || localStorage.getItem("cart")){
      localStorage.removeItem("user")
      localStorage.removeItem("cart")

    }
  }


  reg():  void {
    if(this.regname !="" && this.regpassword !=""){
    const tp = {
     name: this.regname,
     password: this.regpassword
    }
    this.http.post("http://localhost:3000/add_user", { user: tp },
    {
      responseType: 'text',
      withCredentials: true}).subscribe(data =>{
      /*this.product = data*/
      console.log(data)
    })
  }}


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
