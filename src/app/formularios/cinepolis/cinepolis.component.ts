import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
 nombre: string = '';
  compradores: number = 0;
  boletos: number = 0;
  tarjeta: string = 'no'; 
  total: number = 0;
  mensaje: string = '';

 salir() {     this.nombre = '';
    this.compradores = 0;
    this.boletos = 0;
    this.tarjeta = 'no';
    this.total = 0;
    this.mensaje = '';
  }
calcular() {    let precio = 12;
  let maxiBoleto = this.compradores * 7;


  if (this.boletos > maxiBoleto) {     this.total = 0;     this.mensaje =
     "No puedes comprar más de " + maxiBoleto + " boletos para " + this.compradores + " comprador(es).";
    return;
  }
           let totalBase = this.boletos * precio;
              let descuentoCantidad = 0;
                let descuentoTarjeta = 0;

             if (this.boletos > 5) {     descuentoCantidad = totalBase * 0.15; 
    this.mensaje = "Se aplicó un 15% de descuento por comprar más de 5 boletos.";
  } else if (this.boletos >= 3) {
   
    descuentoCantidad = totalBase * 0.10; 
    this.mensaje = "Se aplicó un 10% de descuento por comprar entre 3 y 5 boletos.";
                } else {     descuentoCantidad = 0;
    this.mensaje = "No se aplicó descuento por cantidad.";   }

  let subtotal = totalBase - descuentoCantidad;

           if (this.tarjeta === 'si') {     descuentoTarjeta = subtotal * 0.10;
    subtotal = subtotal - descuentoTarjeta;
    this.mensaje = this.mensaje + " Además, se aplicó un 10% adicional por usar tarjeta Cineco.";
  }
         this.total = subtotal;
}
 
}