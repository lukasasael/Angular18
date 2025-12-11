import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-meu-signal',
  templateUrl: './meu-signal.component.html',
  styleUrl: './meu-signal.component.scss'
})
export class MeuSignalComponent {
  name = signal('Lukas');

changeName() {
  this.name.set('Novo Nome');
}

}
