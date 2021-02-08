import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('New Styles', "Adidas", "Rojo", 50, true),
            new Zapatilla('Nike runner', "Nike", "Blanco", 100, true),
            new Zapatilla('507', "New Balance", "Negro", 75, true),
            new Zapatilla('Airmax', "Nike", "Negro", 190, false),
            new Zapatilla('35', "Sketchers", "Negro", 40, false)
        ]
    }

    getTexto(){
        return "Hola mundo desde un servicio";
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}