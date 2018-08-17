import { CadastroRealizadoComponent } from './cadastro-realizado/cadastro-realizado.component';
import { HomeComponent } from './home/home.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'questionario', component: QuestionarioComponent },
  { path: 'cadastro-realizado', component: CadastroRealizadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
