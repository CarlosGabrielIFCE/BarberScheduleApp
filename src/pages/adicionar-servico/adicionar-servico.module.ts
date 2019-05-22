import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarServicoPage } from './adicionar-servico';

@NgModule({
  declarations: [
    AdicionarServicoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarServicoPage),
  ],
})
export class AdicionarServicoPageModule {}
