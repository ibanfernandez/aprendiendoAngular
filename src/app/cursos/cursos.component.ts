import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre:string='';
  public followers:number=NaN;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params:Params)=>{
      this.nombre = params.nombre;
      this.followers = +params.followers;
      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home']);
      }
      // this.param1 = params['param1'];
      // console.log(this.param1);
    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas']);
  }

}
