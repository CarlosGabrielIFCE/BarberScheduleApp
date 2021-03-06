import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  servicos: any;
  valor: number;
  tipoServico: any;
  clientes: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public localStorageProv: LocalStorageProvider,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController) {
    this.servicos = this.localStorageProv.getServicos();
    this.tipoServico = this.localStorageProv.getTipoServico();
    this.clientes = this.localStorageProv.getClientes();
  }

  cancelarServico(index) {
    this.alertCtrl.create({
      title: "Aviso",
      subTitle: "Deseja excluir esse serviço?",
      buttons: [{
        text: "Sim",
        handler: () => {
          this.servicos.splice(index, 1);
          this.toastCtrl.create({ message: "Serviço cancelado com  sucesso!", duration: 3000 }).present();
        }
      }, {
        text: "Cancelar",
        role: 'cancel',
        handler: () => {
          console.log("Botão de Cancelar clicado");
        }
      }]
    }).present();
    this.localStorageProv.setServicos(this.servicos);
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
              }else if (data[0] == "1") {
                console.log("Cartão");
                this.valor = this.tipoServico[i].valorCartao;
                this.servicos[index].valor = this.valor;
              }
              for  (let i = 0; i < this.clientes.length;i++) {
                if(this.clientes[i].nome == this.servicos[i].client) {
                  console.log(this.clientes[index]);
                  this.clientes[i].qtdCortes++;
                  this.localStorageProv.setClientes(this.clientes);
                }
              }
              console.log(this.valor);
              this.localStorageProv.setServicos(this.servicos);
            }
          });
          alert.present();
      }
    }
    console.log(this.servicos[index]);
  }

}
