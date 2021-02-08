import { Component } from '@angular/core';
import { Configuracion } from "./models/configuracion";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public descripcion: string;
  public mostrar_videojuegos: boolean = true;
  public config;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
    ) {
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;

  }
  ngOnInit(): void {
    this._router.navigate(['/home']);
  }

  ocultarVideojuegos(value: boolean) {
    this.mostrar_videojuegos = value;
  }

}

