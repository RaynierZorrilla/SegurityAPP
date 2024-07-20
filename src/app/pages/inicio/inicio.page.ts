import { Component } from '@angular/core';
import { IncidenciasService } from '../../services/incidencias.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  constructor(private incidenciasService: IncidenciasService) {}

  borrarIncidencias() {
    this.incidenciasService.deleteIncidencias();
  }
}
