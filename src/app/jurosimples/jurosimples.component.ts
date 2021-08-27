import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurosimples',
  templateUrl: './jurosimples.component.html',
  styleUrls: ['./jurosimples.component.css']
})
export class JurosimplesComponent implements OnInit {

  valor: number;
  juros: number;
  tempo: number;
  total: number;

  jurosimples() {
    return this.total = this.valor * (1 + (this.juros / 100) * this.tempo);
  }

  constructor() { }

  ngOnInit() {
  }

}