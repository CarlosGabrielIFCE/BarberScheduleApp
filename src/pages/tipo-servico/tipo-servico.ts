import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-tipo-servico',
  templateUrl: 'tipo-servico.html',
})
export class TipoServicoPage {
  tipoServico: any = [];
  nome: string = '';
  valorCartao: number = 0;
  valorDinheiro: number = 0;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public localStorage: LocalStorageProvider,
              public toastCtrl: ToastController) {
  }

  salvarTipoServico() {
    let servico = {
      nome: this.nome,
      valorCartao: this.valorCartao,
      valorDinheiro: this.valorDinheiro
    }
    this.tipoServico.push(servico);
    this.localStorage.setTipoServico(this.tipoServico);
    this.toastCtrl.create({message: "Serviço Adicionado com sucesso!", duration: 3000}).present();
  }

  delTipoServico(index) {
    this.tipoServico.splice(index, 1);
    this.localStorage.setTipoServico(this.tipoServico);
    this.toastCtrl.create({message: "Serviço excluido com sucesso!", duration: 3000}).present();
  }

  concluirCadastro() {
    this.navCtrl.setRoot(HomePage);
  }

}
