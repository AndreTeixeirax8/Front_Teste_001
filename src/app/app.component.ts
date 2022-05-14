import { Component } from '@angular/core';
//importar login service 
import { LoginServiceService } from './service/login-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xcode';

  //variaveis que representam o objeto do formulario
  usuario ={login: '', senha: ''}; 

  constructor (private loginService: LoginServiceService){}

   public login(){
     this.loginService.login(this.usuario);
   }
}
