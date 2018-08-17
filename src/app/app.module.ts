import { PerguntasService} from './perguntas-service';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { QuestionarioComponent } from './questionario/questionario.component';
import { HomeComponent } from './home/home.component';
import { PopupContentComponent } from './popup-content/popup-content.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroRealizadoComponent } from './cadastro-realizado/cadastro-realizado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    QuestionarioComponent,
    HomeComponent,
    PopupContentComponent,
    PopupContentComponent,
    CadastroRealizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  providers: [PerguntasService],
  bootstrap: [AppComponent],
  entryComponents: [PopupContentComponent]
})
export class AppModule { }
