import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

@IonicPage()
@Component({
  selector: 'page-register-client',
  templateUrl: 'register-client.html',
})
export class RegisterClientPage {
  clientes: any = [];
  nome: string;
  telefone: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public localStorage: LocalStorageProvider,
              public toastCtrl: ToastController) {
                this.clientes = this.localStorage.getClientes();
  }

  addCliente() {
    let cliente = {
      nome: this.nome,
      telefone: this.telefone,
      cortes: [],
      qtdCortes : 0
    }
    this.clientes.push(cliente);
    this.localStorage.setClientes(this.clientes);
    this.toastCtrl.create({message: "Cliente cadastrado com sucesso", duration: 3000}).present();
    this.navCtrl.pop();
  }

}
