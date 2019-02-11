//importamos el input de angular/core
import { Component, Input, OnInit } from '@angular/core';
//importamos la clase Imagen
import {Imagen} from 'src/app/models/imagen';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {
  //añadimos la interface input
  //Le decimos al componente "imagen" que tome
  //el input de otro componente en este caso 
  //de "lista-imagenes"
  @Input() 
  //Le decimos que debe importar los objetos imagen
  imagenyeah: Imagen;
  constructor() { }

  ngOnInit() {
  }

}
