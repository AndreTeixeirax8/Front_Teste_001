import { Component, OnInit } from '@angular/core';
//importar login service 
import { LoginServiceService } from '../service/login-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  //variaveis que representam o objeto do formulario
  usuario ={login: '', senha: ''}; 

  constructor (private loginService: LoginServiceService){}

   public login(){
     this.loginService.login(this.usuario);
   }

  ngOnInit(): void {
  }

  
}
