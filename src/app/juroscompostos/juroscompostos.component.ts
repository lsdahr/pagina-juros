import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juroscompostos',
  templateUrl: './juroscompostos.component.html',
  styleUrls: ['./juroscompostos.component.css']
})
export class JuroscompostosComponent implements OnInit {

  valor: number;
  juros: number;
  tempo: number;


  juroscompostos(valor, juros, tempo) {
      return valor * Math.pow((1 + (juros / 100)), tempo);
  }

  getTempo() {
    return this.tempo;
  }

  getJuros() {
    let list: number[] = [];
    for(let i = 1; i <= this.tempo; i++)
      list.push(this.getTempo());
      return list;
  }

  constructor() { }

  ngOnInit() {
  }

}