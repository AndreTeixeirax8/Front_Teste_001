import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importação do formulario para receber dados 
import { FormsModule } from '@angular/forms'; 
//import para conseguir usar as reuisições ajax
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule,Routes} from '@angular/router'
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
//correção do erro da linha export const routes : ModuleWithProviders  
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}

//declaração da exportação da configuração de rotas
export const appRouters: Routes = [
  //chama o home components ao digitar home que direciona para pagina html
  {path : 'home', component : HomeComponent}, 
  {path : 'login', component : LoginComponent},
  {path : '', component : LoginComponent}
];


export const routes : ModuleWithProviders = RouterModule.forRoot(appRouters);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [//declaração dos imports
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
