
export class Resistencia {
  
  constructor(
    public color1: string,
    public color2: string,
    public color3: string,
    public tolerancia: string
  ) {    
  }

  calcularValor(): number {
    let numero1 = 0;
    let numero2 = 0;
    let multiplicador = 1;

    if (this.color1 == 'negro') numero1 = 0;
        else if (this.color1 == 'marron') numero1 = 1;
    else if (this.color1 == 'rojo') numero1 = 2;
        else if (this.color1 == 'naranja') numero1 = 3;
    else if (this.color1 == 'amarillo') numero1 = 4;
        else if (this.color1 == 'verde') numero1 = 5;
    else if (this.color1 == 'azul') numero1 = 6;
        else if (this.color1 == 'morado') numero1 = 7;
    else if (this.color1 == 'gris') numero1 = 8;
        else if (this.color1 == 'blanco') numero1 = 9;

    if (this.color2 == 'negro') numero2 = 0;
        else if (this.color2 == 'marron') numero2 = 1;
    else if (this.color2 == 'rojo') numero2 = 2;
        else if (this.color2 == 'naranja') numero2 = 3;
    else if (this.color2 == 'amarillo') numero2 = 4;
        else if (this.color2 == 'verde') numero2 = 5;
    else if (this.color2 == 'azul') numero2 = 6;
        else if (this.color2 == 'morado') numero2 = 7;
    else if (this.color2 == 'gris') numero2 = 8;
        else if (this.color2 == 'blanco') numero2 = 9;

            if (this.color3 == 'negro') multiplicador = 1;
    else if (this.color3 == 'marron') multiplicador = 10;
        else if (this.color3 == 'rojo') multiplicador = 100;
            else if (this.color3 == 'naranja') multiplicador = 1000;
    else if (this.color3 == 'amarillo') multiplicador = 10000;
        else if (this.color3 == 'verde') multiplicador = 100000;
    else if (this.color3 == 'azul') multiplicador = 1000000;
        else if (this.color3 == 'morado') multiplicador = 10000000;
    else if (this.color3 == 'gris') multiplicador = 100000000;
        else if (this.color3 == 'blanco') multiplicador = 1000000000;


    let resultado = numero1 * 10 + numero2;
        resultado = resultado * multiplicador;
    return resultado;
      }

  calcularMinimo(): number {
    let valor = this.calcularValor();
        let porcentaje = 0;

    if (this.tolerancia == 'oro') porcentaje = 5;
    else if (this.tolerancia == 'plata') porcentaje = 10;

    let resta = valor * porcentaje / 100;
    let minimo = valor - resta;
    return minimo;
  }

  calcularMaximo(): number {
    let valor = this.calcularValor();
    let porcentaje = 0;

    if (this.tolerancia == 'oro') porcentaje = 5;
    else if (this.tolerancia == 'plata') porcentaje = 10;

    let suma = valor * porcentaje / 100;
    let maximo = valor + suma;
    return maximo;
  }
}
