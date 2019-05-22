import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { AdicionarServicoPage } from '../adicionar-servico/adicionar-servico';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

@IonicPage()
@Component({
  selector: 'page-cuts',
  templateUrl: 'cuts.html',
})
export class CutsPage {
  servicos: any;
  tipoServico: any;
  valor: number;
  clientes: any;
  empregados: any;
  saldo: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public localStorage: LocalStorageProvider,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController) {
                this.tipoServico = this.localStorage.getTipoServico();
                this.clientes = this.localStorage.getClientes();
                this.empregados = this.localStorage.getEmpregados();
  }

  ionViewDidLoad() {
    this.servicos = this.localStorage.getServicos();
    console.log(this.servicos);
  }

  adicionarServico() {
    this.navCtrl.push(AdicionarServicoPage);
  }

  cancelarServico(index) {
    this.alertCtrl.create({
      title: "Aviso",
      subTitle: "Deseja excluir esse serviço?",
      buttons: [{
        text: "Sim",
        handler: () => {
          this.servicos.splice(index, 1);
          this.localStorage.setServicos(this.servicos);
          this.toastCtrl.create({message: "Serviço cancelado com  sucesso!", duration: 3000}).present();
        }
      }, {
        text: "Cancelar",
        role: 'cancel',
        handler: () => {
          console.log("Botão de Cancelar clicado");
        }
      }]
    }).present();
    this.localStorage.setServicos(this.servicos);
  }

  finalizarServico(index) {
    for (let i = 0;i < this.tipoServico.length;i++) {
      if (this.servicos[index].tipoServ == this.tipoServico[i].nome) {
        console.log(this.tipoServico[i]);
          let alert = this.alertCtrl.create();
          alert.setTitle('Selecione a forma de pagamento');
      
          alert.addInput({
            type: 'checkbox',
            label: 'Dinheiro',
            value: '0',
          });
      
          alert.addInput({
            type: 'checkbox',
            label: 'Cartão',
            value: '1'
          });
      
          alert.addButton('Cancel');
          alert.addButton({
            text: 'Ok',
            handler: data => {
              console.log('Checkbox data:', data[0]);
              if (data[0] == "0") {
                console.log("Dinheiro");
                this.valor = this.tipoServico[i].valorDinheiro;
                this.servicos[index].valor = this.valor;
                this.saldo += this.valor;
              }else if (data[0] == "1") {
                console.log("Cartão");
                this.valor = this.tipoServico[i].valorCartao;
                this.servicos[index].valor = this.valor;
                this.saldo += this.valor;
              }
              for  (let i = 0; i < this.clientes.length;i++) {
                if(this.clientes[i].nome == this.servicos[index].client) {
                  console.log(this.clientes[index]);
                  this.clientes[i].qtdCortes++;
                  this.localStorage.setClientes(this.clientes);
                }
              }
              for (let i = 0; i < this.empregados.length;i++) {
                if (this.empregados[i].nome == this.servicos[index].empregado) {
                  this.empregados[i].saldo += this.valor;
                }
              }
              this.localStorage.setSaldo(this.saldo);
              this.localStorage.setServicos(this.servicos);
              this.localStorage.setEmpregados(this.empregados);
              console.log(this.valor);
            }
          });
          alert.present();
      }
    }
    console.log(this.servicos[index]);
  }

}
