import { Component, OnInit } from '@angular/core';
import { MorseService } from '../app/providers/morse.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-cod-morse';

  public codificar = ''
  public decodificar : any;
  constructor(private morseService: MorseService) { }

  public getCodigficacao(texto: any): void {
    this.morseService.getCodigficacao(texto)
      .subscribe(
        result => {
          this.decodificar = result.morse;
        })

  };

}
