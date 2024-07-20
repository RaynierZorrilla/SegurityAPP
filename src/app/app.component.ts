import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Registro', url: '/registro', icon: 'folder-open' },
    { title: 'Visualización', url: '/visualizacion', icon: 'eye' },
    { title: 'Acerca de', url: '/acerca', icon: 'help' },

  ];

}
