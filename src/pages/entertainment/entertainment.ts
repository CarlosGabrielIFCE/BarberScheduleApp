import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';

@IonicPage()
@Component({
  selector: 'page-entertainment',
  templateUrl: 'entertainment.html',
})
export class EntertainmentPage {
  saldo: any;
  empregados: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public localStorage: LocalStorageProvider) {
                this.saldo = this.localStorage.getSaldo();
                this.empregados = this.localStorage.getEmpregados();
                console.log(this.saldo);
                console.log(this.empregados);
              }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntertainmentPage');
  }

}
