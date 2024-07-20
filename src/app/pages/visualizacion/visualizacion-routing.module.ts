import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizacionPage } from './visualizacion.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizacionPageRoutingModule {}
