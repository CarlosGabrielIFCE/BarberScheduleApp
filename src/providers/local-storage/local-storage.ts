import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageProvider {
  empregados = [];
  clientes = [];
  servicos = [];
  tipoServico = [];
  saldo: number;

  constructor() {
    this.empregados = [];
    this.clientes = [];
    this.servicos = [];
    this.saldo = 0;
    this.tipoServico = [];
  }

  setTipoServico(tipoServico) {
    this.tipoServico = tipoServico;
  }

  getTipoServico() {
    return this.tipoServico;
  }

  setEmpregados(empregados) {
    this.empregados = empregados;
  }

  getEmpregados() {
    return this.empregados;
  }

  setClientes(clientes) {
    this.clientes = clientes;
  }

  getClientes() {
    return this.clientes;
  }

  setServicos(servicos) {
    this.servicos = servicos;
  }

  getServicos() {
    return this.servicos;
  }

  setSaldo(saldo) {
    this.saldo = saldo;
  }

  getSaldo() {
    return this.saldo;
  }

}
