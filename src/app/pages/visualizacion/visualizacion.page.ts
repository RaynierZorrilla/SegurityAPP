import { Component, OnInit } from '@angular/core';
import { IncidenciasService } from '../../services/incidencias.service';
import { Incidencia } from '../../models/incidencia.model';

@Component({
  selector: 'app-visualizacion',
  templateUrl: './visualizacion.page.html',
  styleUrls: ['./visualizacion.page.scss'],
})
export class VisualizacionPage implements OnInit {
  incidencias: Incidencia[] = [];
  selectedIncidencia: Incidencia | null = null;

  constructor(private incidenciasService: IncidenciasService) {}

  ngOnInit() {
    this.incidencias = this.incidenciasService.getIncidencias();
  }

  viewIncidencia(incidencia: Incidencia) {
    this.selectedIncidencia = incidencia;
  }

  closeModal() {
    this.selectedIncidencia = null;
  }
}
