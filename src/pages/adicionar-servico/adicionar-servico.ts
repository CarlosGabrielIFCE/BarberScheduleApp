import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

@IonicPage()
@Component({
  selector: 'page-adicionar-servico',
  templateUrl: 'adicionar-servico.html',
})
export class AdicionarServicoPage {
  empregados: any;
  empregado: any;
  cortes = [];
  clientes: any;
  cliente: any;
  client: any;
  tipoServ: any;
  valor: any;
  index: any;
  tipoServico: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public localStorage: LocalStorageProvider,
              public toastCtrl: ToastController) {
                this.clientes = this.localStorage.getClientes();
                this.tipoServico = this.localStorage.getTipoServico();
                this.empregados = this.localStorage.getEmpregados();
                this.cortes = this.localStorage.getServicos();
                console.log(this.empregados);
                this.index = this.navParams.get('index') || "";
                this.cliente = this.clientes[this.index] || "";
                console.log(this.cliente);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarServicoPage');
  }

  salvarServico() {
    let servico = {
      client: this.client,
      tipoServ: this.tipoServ,
      empregado: this.empregado,
      valor: ""
    }
    for (let i = 0;i < this.empregados.length;i++) {
      if (this.empregados[i].nome == this.empregado) {
        this.empregados[i].cortes.push(servico);
        this.localStorage.setEmpregados(this.empregados);
      }
    }
    this.cortes.push(servico);
    this.localStorage.setServicos(this.cortes);
    this.toastCtrl.create({message: "Serviço Adicionado com sucesso", duration: 3000}).present();
    this.navCtrl.pop();
  }

}
