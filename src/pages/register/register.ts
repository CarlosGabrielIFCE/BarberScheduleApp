import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  empregados: any ;
  nome: string;
  cpf: number;
  telefone: number;
  login: string;
  senha: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public localStorage: LocalStorageProvider) {
                this.empregados = this.localStorage.getEmpregados();
    console.log(this.empregados);
  }

  cadastrarEmpregado() {
    let empregado = {
      nome: this.nome,
      cpf: this.cpf,
      telefone: this.telefone,
      cortes: [],
      saldo: 0
    }
    this.empregados.push(empregado);
    this.localStorage.setEmpregados(this.empregados);
    this.navCtrl.pop();
  }

}
