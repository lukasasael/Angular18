import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  nomes = ['Ana', 'João', 'Carlos'];

  firstLetterA(nome: string): boolean {
    return nome.charAt(0).toUpperCase() === 'A';
  }
  isAtivo = true;

  mudarCor() {
    this.isAtivo = !this.isAtivo;
  }

  status = "erro";

  ativo = false;
  erro = true;

}
