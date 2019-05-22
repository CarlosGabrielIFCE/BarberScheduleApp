import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistroInicialPage } from './registro-inicial';

@NgModule({
  declarations: [
    RegistroInicialPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistroInicialPage),
  ],
})
export class RegistroInicialPageModule {}
