import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocalStorageProvider } from '../../providers/local-storage/local-storage';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {
  empregados: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public localStorageProv: LocalStorageProvider) {
                this.empregados = this.localStorageProv.getEmpregados();
                console.log(this.empregados);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeePage');
  }

  addFuncionario() {
    this.navCtrl.push(RegisterPage);
  }

}
