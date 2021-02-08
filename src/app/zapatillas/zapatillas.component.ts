import { Component, OnInit } from '@angular/core';
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatillas.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillaService]
})

export class ZapatillasComponent {
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillaService: ZapatillaService
    ) {
        this.zapatillas = [];
        this.mi_marca = "";
        this.color = 'orange';
        this.marcas = [];

    }

    ngOnInit(): void {
        this.zapatillas = this._zapatillaService.getZapatillas();
        this.getMarcas();
    }

    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {
            if (this.marcas.indexOf(zapatilla.marca) < 0) {
                this.marcas.push(zapatilla.marca);
            }
        });

        console.log(this.marcas);

    }

    getMarca() {
        alert(this.mi_marca);
    }

    addMarca() {
        this.marcas.push(this.mi_marca);
    }


    borrarMarca(indice: number) {
        // delete this.marcas[indice];
        this.marcas.splice(indice, 1);
    }

    onBlur() {
        console.log('Has salido del input');
    }

    mostrarPalabra() {
        alert(this.mi_marca);
    }
}