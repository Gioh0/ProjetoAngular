import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  valor1: any = null;
  valor2: any = null;
  exibicao: any = null;
  botao: any = null;
  operador: any = null;

  definirValor(numero: any) {
    if (this.valor1 == null) {
      this.valor1 = numero;
    } else {
      if (this.valor2 == null) {
        this.valor2 = numero;
      }
    }
    console.log(this.valor1);
    console.log(this.valor2);
  }

  operacao(operador: any) {

    const valor1 = parseFloat(this.valor1);
    const valor2 = parseFloat(this.valor2);
  
    if (operador == '+') {
      this.operador = '+';
      this.exibicao = this.valor1 + this.valor2;
    }
    else if (operador == '-') {
      this.operador = '-';
      this.exibicao = this.valor1 - this.valor2;
    }
    else if (operador == '*') {
      this.operador = '*';
      this.exibicao = this.valor1 * this.valor2;
    }
    else if (operador == '/') {
      this.operador = '/';
      this.exibicao = this.valor1 / this.valor2;
    }
    else if (operador == '%') {
      this.operador = '%';
      this.exibicao = this.valor1 * this.valor2 / 100;
    }
  }

  limpar(){
    this.valor1 = null;
    this.valor2 = null;
    this.exibicao = null;
  }

  botaoresultado(){
    this.botao = this.exibicao;
  }
}