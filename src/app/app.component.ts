//importa el componente decorador de la libreria core
import { Component } from '@angular/core';

//@ para configurar el component
@Component({
  //defines cualquier nombre de tag alias para que se cree 
  //y cuando se le invoca como un <tag> se activará en esa plantilla
  selector: 'app-root',
  //ruta de su plantilla html
  templateUrl: './app.component.html',
  //ruta de estilo
  styleUrls: ['./app.component.css']
})

//Hace que este componente sea exportado a otros puntos de la web 
export class AppComponent {
  //ESTO SERA EXPORTADO DENTRO DE {{}} 
  //LLAMADO INTERPOLACION
  title = 'Bienvenido al sistema';
}
