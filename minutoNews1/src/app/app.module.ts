import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { ButtonLeftRightComponent } from './shared/button-left-right/button-left-right.component';
import { HttpClientModule } from '@angular/common/http';
import { BoxEditoriaisComponent } from './box-editoriais/box-editoriais.component';
import { BoxMaisAcessadosComponent } from './box-mais-acessados/box-mais-acessados.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideComponent,
    ButtonLeftRightComponent,
    BoxEditoriaisComponent,
    BoxMaisAcessadosComponent,
    ContatoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBNo6weukcqqQJIqQcvMuaVGSkfPM6DId0'
    })
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
