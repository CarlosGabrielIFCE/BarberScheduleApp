import { Component, ComponentFactoryResolver } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { RegistroInicialPage } from '../registro-inicial/registro-inicial';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: string;
  senha: string;
  empregados = [{
    nome: "admin",
    cpf: "",
    telefone: "",
    login: "admin",
    senha: "admin",
    saldo: 0,
    cortes: [],
  }];
  clientes = [ {
    nome: "Carlos Gabriel",
    telefone: "(61) 9 82364578",
    cortes: [],
    qtdCortes: 0
  }];
  servicos = [];
  saldo: number;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public localStorageProv: LocalStorageProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  cadastrarEmpregado() {
    this.navCtrl.push(RegisterPage, {
      empregados: this.empregados
    })
  }

  logar() {
    this.localStorageProv.setClientes(this.clientes);
    for (let i = 0; i < this.empregados.length;i++) {
      if (this.login == this.empregados[i].login && this.senha == this.empregados[i].senha) {
        this.localStorageProv.setEmpregados(this.empregados);
        this.navCtrl.push(RegistroInicialPage, {
          index: i,
        })
      }
    }
  }

}
