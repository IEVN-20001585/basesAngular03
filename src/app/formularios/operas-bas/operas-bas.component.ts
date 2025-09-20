import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  templateUrl: './operas-bas.component.html',
  styleUrl: './operas-bas.component.css'
})
export class OperasBasComponent {
  num1: string = '';
  num2: string = '';
  resultado: number = 0; 
  operacion: string = 'sumar'; 

  sumar(): void {   this.resultado = Number(this.num1) + Number(this.num2);
  }
    resta(): void {  this.resultado = Number(this.num1) - Number(this.num2);
  }  
  multi(): void {  this.resultado = Number(this.num1) * Number(this.num2);
  }
 div(): void {  this.resultado = Number(this.num1) / Number(this.num2);
  }
  calcular(): void {
    if (this.operacion === 'sumar') this.sumar();
          else if (this.operacion === 'resta') this.resta();
       else if (this.operacion === 'multi') this.multi();
             else if (this.operacion === 'div') this.div();
  }
}
