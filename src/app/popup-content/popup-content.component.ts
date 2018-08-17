import { PerguntasService } from './../perguntas-service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-content',
  templateUrl: './popup-content.component.html',
  styleUrls: ['./popup-content.component.css']
})
export class PopupContentComponent implements OnInit {

  termoAceito:boolean

  constructor(private route: Router, private perguntasService: PerguntasService, private dialogRef: MatDialogRef<PopupContentComponent>) { }

  ngOnInit() {
  }

  carregaCadastroRealizado(){

    if(this.termoAceito){

      this.perguntasService.salvarRespostas('').subscribe(()=>{
        this.route.navigate(['/cadastro-realizado'])
        this.dialogRef.close()
      })

    }
  }

}
