import { Component } from '@angular/core';

interface Tarefas{
  atividade: string;
  desc: string;
  concluida: boolean
}

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent {
atividade: Tarefas[] = [
  {atividade: 'Entregar relatorio', desc: 'Relatorio despesas', concluida: true},
  {atividade: 'Visita', desc: 'Visita de Charles', concluida: true},
  {atividade: 'Reunião', desc: 'Reunião com Time de Fin.', concluida: true},
  {atividade: 'Reunião', desc: 'Reunião Equipe', concluida: true},
  {atividade: 'OnBoarding', desc: 'OnBoarding Novos Funcionarios', concluida: true},
]
concluida(atividade:Tarefas){
  atividade.concluida = !atividade.concluida;
}
}
