import { PerguntasService } from './../perguntas-service';


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-realizado',
  templateUrl: './cadastro-realizado.component.html',
  styleUrls: ['./cadastro-realizado.component.css']
})
export class CadastroRealizadoComponent implements OnInit {

  comRespostas:boolean
  respostas

  constructor(private perguntasService: PerguntasService) { }

  ngOnInit() {

    this.perguntasService.recuperaRespostas().subscribe((data) => {
      this.respostas = Object.keys(data).map((item:any)=>{
        return item = {key: item, value: data[item]}
      })
    })
    
  }

}
