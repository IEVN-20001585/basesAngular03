import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {

  color1: string = '';
  color2: string = '';
  color3: string = '';
  tolerancia: string = '';

  resultado: number = 0;
  maximo: number = 0;
  minimo: number = 0; 
  valores: any = {
    negro: 0, marron: 1, rojo: 2, naranja: 3, amarillo: 4,
    verde: 5, azul: 6, violeta: 7, gris: 8, blanco: 9,
  };

  multiplicadores: any = {
    negro: 1, marron: 10, rojo: 100, naranja: 1000, amarillo: 10000,
    verde: 100000, azul: 1000000, violeta: 10000000, gris: 100000000,
    blanco: 1000000000,
  }; 
  tolerancias: any = {     oro: 0.05,
    plata: 0.1,
  };
   calcular() {     if (!this.color1 || !this.color2 || !this.color3 || !this.tolerancia) {       return;
    }     let digito1 = this.valores[this.color1];    
       let digito2 = this.valores[this.color2];
          let multi = this.multiplicadores[this.color3];

          let valorBa = (digito1 * 10 + digito2) * multi;
           this.resultado = valorBa;

               let tol = this.tolerancias[this.tolerancia];
               this.maximo = valorBa + (valorBa * tol);
             this.minimo = valorBa - (valorBa * tol);
  }
}