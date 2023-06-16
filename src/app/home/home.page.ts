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
  operacao: any = null;
  exibicao: any = null;

  mostrar(numero: any) {
    if (this.valor1 == null) {
      this.valor1 = numero;
    }
    else {
      if (this.valor2 == null) {
        this.valor2 = numero;
      }
    }
    console.log(this.valor1);
    console.log(this.valor2)
  }
  adicao(operacao: any) {
    if (this.operacao == '+') {
      this.exibicao = this.valor1 + this.valor2;
    }
  }
  subtracao(operacao: any) {
    if (this.operacao == '-') {
      this.exibicao = this.valor1 - this.valor2;
    }
  }
  divisao(operacao: any) {
    if (this.operacao == '/') {
      this.exibicao = this.valor1 / this.valor2;
    }
  }

  multiplicacao(operacao: any) {
    if (this.operacao == '*') {
      this.exibicao = this.valor1 * this.valor2;
    }
  }

  cem(operacao: any) {
    if (this.operacao == '%') {
      this.exibicao = this.valor1 * this.valor2 / 100;
    }
  }
}
