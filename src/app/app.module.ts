import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { RiverComponent } from './river/river.component';
import { MindisComponent } from './midis/mindis.component';
import { NavbarComponent } from './navbar.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ListaImagenesComponent } from './listaImagenes/lista-imagenes/lista-imagenes.component';
import { ImagenComponent } from './imagen/imagen.component';

@NgModule({
  declarations: [
    //se declara 
    AppComponent,
    NuevoComponent,
    RiverComponent,
    MindisComponent,
    NavbarComponent,
    GaleriaComponent,
    ListaImagenesComponent,
    ImagenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
