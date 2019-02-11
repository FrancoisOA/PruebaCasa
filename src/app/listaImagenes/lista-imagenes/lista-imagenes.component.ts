import { Component, Input, OnInit } from '@angular/core';
//permitira usar el modelo para crear nuevas imagenes
import { Imagen } from "src/app/models/imagen";

@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styles: []
})
export class ListaImagenesComponent implements OnInit {

  //objeto Image con parametros inicializados
  // imagenlista = new Imagen(
  // 'hola',
  // 'uno',
  // 'https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  // 'descripcion',
  // 'https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');


  //objeto Image con parametros inicializados
  imagenlista: Imagen[] = [
    new Imagen (
    'hola',
    'uno',
    'https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'Descripcion',
    'https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    ),
  
    new Imagen (
      'hola',
      'uno',
      'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'Descripcion',
      'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ),

    new Imagen (
      'hola',
      'uno',
      'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      'Descripcion',
      'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        ),
  ];
  constructor() { }

  ngOnInit() {
  }

}

 

