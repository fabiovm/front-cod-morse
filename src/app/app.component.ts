import { Component, OnInit } from '@angular/core';
import { MorseService } from '../app/providers/morse.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-cod-morse';

  public codificar = '';
  public decodificar : any;
  public codificarList = [];
  constructor(private morseService: MorseService) { }

  public getCodificacao(texto: any): void {
    this.morseService.getCodificacao(texto)
      .subscribe(
        result => {
          this.decodificar = result.morse;
          this.getDecodificacao(this.decodificar);
        })
  };

  public getDecodificacao(texto: any): void {
    this.morseService.getDecodificacao(texto)
      .subscribe(
        result => {
          this.codificarList.push(result.morse);
          console.log ("aqui "  );
        })
  };



}
