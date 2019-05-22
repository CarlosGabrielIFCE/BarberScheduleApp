import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { TipoServicoPage } from '../tipo-servico/tipo-servico';

@IonicPage()
@Component({
  selector: 'page-registro-inicial',
  templateUrl: 'registro-inicial.html',
})
export class RegistroInicialPage {
  empregados: any;
  empregado: any;
  nome: any;
  cpf: any;
  telefone: any;
  index: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public localStorage: LocalStorageProvider) { 
                this.empregados = this.localStorage.getEmpregados();
                this.index = this.navParams.get('index');
                this.empregado = this.empregados[this.index];
                console.log(this.empregado);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroInicialPage');
  }

  salvar() {
    this.empregado.nome = this.nome;
    this.empregado.cpf = this.cpf;
    this.empregado.telefone = this.telefone;
    this.localStorage.setEmpregados(this.empregados);
    this.navCtrl.push(TipoServicoPage);
  }

}
