import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html',
 
})

export class HeroesListComponent {

imageWidth:number=40;
imagenMargin:number=2;
muestraImage:boolean=true;
listFilter:string=' ';
showImage(): void {
  this.muestraImage = !this.muestraImage;

}

  heroes:any[]=[
  {      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
    nombre:"Goku",
    descripcion:"Kame Hame Ha",
    race:"Saiyan",
    ki:9000
  },
  {
"imagen":"https://dragonball-api.com/characters/vegeta_normal.webp",
 nombre:"Vegeta",
    descripcion:"Final Flash",
    race:"Namekian",
    ki:19000
  },
  {
"imagen":"https://dragonball-api.com/characters/picolo_normal.webp",
 nombre:"Piccolo",
    descripcion:"Malanasapo",
    race:"Namekian",
    ki:70000
  },{
    "imagen":"https://dragonball-api.com/characters/Freezer.webp",
 nombre:"Freezer",
    descripcion:"Death Ball",
    race:"Alien",
    ki:9500
  },
  ]
}
