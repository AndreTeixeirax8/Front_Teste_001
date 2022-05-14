import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importação do formulario para receber dados 
import { FormsModule } from '@angular/forms'; 
//import para conseguir usar as reuisições ajax
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [//declaração dos imports
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
