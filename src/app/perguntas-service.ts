import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class PerguntasService {

  constructor(private http: HttpClient) { 

  }

  recuperaPerguntas(){

    return this.http.get('https://webserver-cedro.herokuapp.com/perguntas');

  }

  recuperaOpcoes(){

    return  this.http.get('https://webserver-cedro.herokuapp.com/select-options')
    
  }

  salvarRespostas(respostas){

    return this.http.post('https://webserver-cedro.herokuapp.com/respostas', {respostas})
  }

  recuperaRespostas(){
    return this.http.get('https://webserver-cedro.herokuapp.com/respostas')
  }

}
