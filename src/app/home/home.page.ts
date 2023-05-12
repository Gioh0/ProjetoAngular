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
  alunos = {
    nome: 'Jubileu',
    telefones:[
      {numero: '12345566'},
      {numero: '45677761'},
    ],
    rm: '123',
    cursos: [
      {nome: 'DS', horario: 'manhã'},
      {nome: 'Farmacia', horario: 'noite'},
      {nome: 'Química', horario:'tarde'},
      {nome: 'Meio ambiente', horario:'tarde'},
    ]
  }
  alertButtons = ['OK'];
}
