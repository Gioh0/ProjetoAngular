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

  mostrar(numero: any) {
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

    if (operador == '+') {
      this.exibicao = this.valor1 + this.valor2;
    }
    else if (operador == '-') {
      this.exibicao = this.valor1 - this.valor2;
    }
    else if (operador == '*') {
      this.exibicao = this.valor1 * this.valor2;
    }
    else if (operador == '/') {
      this.exibicao = this.valor1 / this.valor2;
    }
    else if (operador == '%') {
      this.exibicao = this.valor1 % this.valor2;
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