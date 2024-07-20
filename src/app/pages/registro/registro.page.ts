import { Component } from '@angular/core';
import { IncidenciasService } from '../../services/incidencias.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  titulo: string = "";
  fecha: string = "";
  descripcion: string = "";
  foto: string = "";
  audio: string = "";

  constructor(private incidenciasService: IncidenciasService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.foto = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onAudioSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.audio = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  addIncidencia() {
    this.incidenciasService.addIncidencia(this.titulo, this.fecha, this.descripcion, this.foto, this.audio);
    this.resetForm();
  }

  resetForm() {
    this.titulo = "";
    this.fecha = "";
    this.descripcion = "";
    this.foto = "";
    this.audio = "";
  }
}
