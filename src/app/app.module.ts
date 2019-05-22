import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClientsPage } from '../pages/clients/clients';
import { CutsPage } from '../pages/cuts/cuts';
import { EmployeePage } from '../pages/employee/employee';
import { EntertainmentPage } from '../pages/entertainment/entertainment';
import { FinancialPage } from '../pages/financial/financial';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LocalStorageProvider } from '../providers/local-storage/local-storage';
import { RegisterClientPage } from '../pages/register-client/register-client';
import { RegistroInicialPage } from '../pages/registro-inicial/registro-inicial';
import { AdicionarServicoPage } from '../pages/adicionar-servico/adicionar-servico';
import { TipoServicoPage } from '../pages/tipo-servico/tipo-servico';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    
    ClientsPage,
    CutsPage,
    EmployeePage,
    EntertainmentPage,
    FinancialPage,
    LoginPage,
    RegisterPage,
    RegisterClientPage,
    RegistroInicialPage,
    AdicionarServicoPage,
    TipoServicoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientsPage,
    CutsPage,
    EmployeePage,
    EntertainmentPage,
    FinancialPage,
    LoginPage,
    RegisterPage,
    RegisterClientPage,
    RegistroInicialPage,
    AdicionarServicoPage,
    TipoServicoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LocalStorageProvider
  ]
})
export class AppModule {}
