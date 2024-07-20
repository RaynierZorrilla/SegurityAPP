import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
})
export class AcercaPage {
  oficial = {
    foto: 'assets/image_67531521.JPG',
    nombre: 'Raynier Roberto',
    apellido: 'Zorrilla Anderson',
    matricula: '2022-1460'
  };
  reflexion = 'La seguridad es nuestra prioridad y nuestro deber.';
}
