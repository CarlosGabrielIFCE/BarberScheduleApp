import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { RegisterClientPage } from '../register-client/register-client';
import { AdicionarServicoPage } from '../adicionar-servico/adicionar-servico';

@IonicPage()
@Component({
  selector: 'page-clients',
  templateUrl: 'clients.html',
})
export class ClientsPage {
  clientes: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public localStorage: LocalStorageProvider,
              public toastCtrl: ToastController) {
                this.clientes = this.localStorage.getClientes();
                console.log(this.clientes);
  }

  addCliente() {
    this.navCtrl.push(RegisterClientPage);
  }

  adicionarServico(index) {
    this.navCtrl.push(AdicionarServicoPage, {
      index: index,
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientsPage');
  }

  delCliente(index) {
    this.clientes.splice(index, 1);
    this.localStorage.setClientes(this.clientes);
    this.toastCtrl.create({message: "Cliente excluido com sucesso", duration: 3000}).present();
    console.log(this.clientes);
  }

}
