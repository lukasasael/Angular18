import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeuInputComponent } from './meu-input/meu-input.component';
import { MeuSignalComponent } from './meu-signal/meu-signal.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuInputComponent,
    MeuSignalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule     // <-- PRECISA estar aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
