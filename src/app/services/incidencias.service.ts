import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Incidencia } from '../models/incidencia.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class IncidenciasService {
  private incidencias: Incidencia[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this.storage = storage;
    this.loadIncidencias();
  }

  async loadIncidencias() {
    const incidencias = await this.storage.get('incidencias');
    this.incidencias = incidencias || [];
  }

  getIncidencias(): Incidencia[] {
    return [...this.incidencias];
  }

  getIncidencia(id: string): Incidencia | undefined {
    return this.incidencias.find(i => i.id === id);
  }

  async addIncidencia(titulo: string, fecha: string, descripcion: string, foto: string, audio: string) {
    const newIncidencia: Incidencia = {
      id: uuidv4(),
      titulo,
      fecha,
      descripcion,
      foto,
      audio
    };
    this.incidencias.push(newIncidencia);
    await this.saveIncidencias();
  }

  async deleteIncidencias() {
    this.incidencias = [];
    await this.storage.set('incidencias', this.incidencias);
  }

  private async saveIncidencias() {
    await this.storage.set('incidencias', this.incidencias);
  }
}
