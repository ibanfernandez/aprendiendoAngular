import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Config } from 'protractor';
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent {
    public titulo: string = "Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: string[];
    public color: string;
    public mi_marca:string;

    constructor() {
        this.mi_marca="";
        this.color = 'orange';
        this.marcas = [];
        this.zapatillas = [
            new Zapatilla('New Styles', "Adidas", "Rojo", 50, true),
            new Zapatilla('Nike runner', "Nike", "Blanco", 100, true),
            new Zapatilla('507', "New Balance", "Negro", 75, true),
            new Zapatilla('Airmax', "Nike", "Negro", 190, false)
        ]
    }

    ngOnInit(): void {
        console.log(this.zapatillas);
        this.getMarcas();

    }

    getMarcas() {
        this.zapatillas.forEach((zapatilla, index) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
        });

        console.log(this.marcas);

    }

    getMarca(){
        alert(this.mi_marca);
    }

    addMarca(){
        this.marcas.push(this.mi_marca);
    }


    borrarMarca(indice:number){
       // delete this.marcas[indice];
       this.marcas.splice(indice, 1);
    }

    onBlur(){
        console.log('Has salido del input');
    }

    mostrarPalabra(){
        alert(this.mi_marca);
    }
}