import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'

})

export class VideojuegoComponent implements OnInit, DoCheck {

    public titulo: string;
    public listado: string;

    constructor() {
        this.titulo = 'Componente de videojuegos';
        this.listado = 'Listado';
    }

    ngOnInit() {
        // console.log('ngOnInit iniciado');
    }

    ngDoCheck() {
        // console.log('Docheck iniciado');
    }

    ngOnDestroy() {
        // console.log("Ondestroy ejecutado");
    }

    cambiarTitulo() {
        this.titulo = 'Nuevo título del componenente';
    }
}