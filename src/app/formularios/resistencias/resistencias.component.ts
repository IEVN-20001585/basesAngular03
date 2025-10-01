import { Component } from '@angular/core';
import { Resistencia } from './resistencia.model';

@Component({
  selector: 'app-resistencias',
  standalone: false,
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.css'
})
export class ResistenciasComponent {
  color1: string = 'naranja';
    color2: string = 'morado';
      color3: string = 'rojo';
  tolerancia: string = 'oro';
    resultadoMostrado: number = 0;
      minimoMostrado: number = 0;
        maximoMostrado: number = 0;
  color1Calculado: string = '';
    color2Calculado: string = '';
  color3Calculado: string = '';
    toleranciaCalculada: string = '';
  haCalculado: boolean = false;
      calcular() {
            const resistencia = new Resistencia(this.color1, 
      this.color2, this.color3, this.tolerancia);
          this.resultadoMostrado = resistencia.calcularValor();
    this.minimoMostrado = resistencia.calcularMinimo();
        this.maximoMostrado = resistencia.calcularMaximo();
            this.color1Calculado = this.color1;
    this.color2Calculado = this.color2;
        this.color3Calculado = this.color3;
            this.toleranciaCalculada = this.tolerancia;
                this.haCalculado = true;
  }

}