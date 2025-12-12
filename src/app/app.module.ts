import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeuInputComponent } from './meu-input/meu-input.component';
import { MeuSignalComponent } from './meu-signal/meu-signal.component';
import { BindingComponent } from './binding/binding.component';
import { ComunicationComponent } from './comunication/comunication.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuInputComponent,
    MeuSignalComponent,
    BindingComponent,
    ComunicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule     // <-- PRECISA estar aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
