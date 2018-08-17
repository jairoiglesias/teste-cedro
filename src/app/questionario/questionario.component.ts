import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { PerguntasService } from '../perguntas-service';
import { log } from 'util';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class QuestionarioComponent implements OnInit {

  userForm:any
  perguntas
  selectOptions

  constructor(private router: Router, private formBuilder: FormBuilder, private perguntasService: PerguntasService) {

    this.userForm = this.formBuilder.group({
      pergunta1: ['', Validators.required],
      pergunta2: ['', Validators.required],
      pergunta3: ['', Validators.required],
      pergunta4_select1: ['', Validators.required],
      pergunta4_select2: ['', Validators.required],
      pergunta4_select3: ['', Validators.required],
      pergunta4_select4: ['', Validators.required]
    });

  }

  ngOnInit() {

    this.perguntasService.recuperaPerguntas().subscribe((data) => {
      this.perguntas = data
      console.log(this.perguntas)
    })

    this.perguntasService.recuperaOpcoes().subscribe((data) => {
      this.selectOptions = data
      console.log(this.selectOptions)
    })

  }

  salvar(){

    if(this.userForm.valid){

      this.perguntasService.salvarRespostas(this.userForm.value).subscribe((data) => {

        this.router.navigate(['/cadastro-realizado'])
      })

    }

    return false

  }

  voltar(){

    console.log('voltar')
    this.router.navigate(['/'])

  }

}
