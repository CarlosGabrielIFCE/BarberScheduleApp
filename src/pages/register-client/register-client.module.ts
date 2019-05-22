import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterClientPage } from './register-client';

@NgModule({
  declarations: [
    RegisterClientPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterClientPage),
  ],
})
export class RegisterClientPageModule {}
