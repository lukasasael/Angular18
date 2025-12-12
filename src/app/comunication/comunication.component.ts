import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comunication',
  templateUrl: './comunication.component.html',
  styleUrls: ['./comunication.component.scss']
})
export class ComunicationComponent {

  // emite +1 para o pai
  @Output() aumentou = new EventEmitter<number>();

  // emite -1 para o pai
  @Output() diminuiu = new EventEmitter<number>();

  aumentar() {
    this.aumentou.emit(1);
  }

  diminuir() {
    this.diminuiu.emit(-1);
  }
}
