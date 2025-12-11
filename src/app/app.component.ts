import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  counter = 0;
    increment() {
      this.counter++;
      console.log(this.counter);
    }
  title = 'angular-training';
}
