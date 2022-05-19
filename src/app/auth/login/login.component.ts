import { HomeComponent } from './../../home/home.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../service/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AS:AuthService,private router:Router) { }
  tryGoogleLogin()
  {
this.AS.doGoogleLogin().then(()=>this.successRidirect())
  }
successRidirect():void{
  this.router.navigate(['/courses'])

}

  ngOnInit(): void {
  }

}
