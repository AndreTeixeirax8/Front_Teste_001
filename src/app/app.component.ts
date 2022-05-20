import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//importar login service 
import { LoginServiceService } from './service/login-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'xcode';

  constructor( private router: Router){

  }

  ngOnInit(): void { //se não tem o token retorna para o login
    if (localStorage.getItem('token') == null){
      this.router.navigate(['login']);
    }
  }

  public sair(){
    localStorage.clear();
    this.router.navigate(['login']);
  }


}
