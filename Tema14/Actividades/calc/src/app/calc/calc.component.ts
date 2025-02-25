import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  standalone: false,
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent implements OnInit {
  public number1 : number=0;
  public number2 : number=0;
  public resultado : number=0;
  constructor() { }
  ngOnInit(): void {
  }

  public suma(){
    this.resultado = this.number1 + this.number2
  }

  public resta(){
    this.resultado = this.number1 - this.number2
  }

  public mult(){
    this.resultado = this.number1 * this.number2
  }

  public div(){
    this.resultado = this.number1/this.number2
  }

  public exp(){
    this.resultado = this.number1 ** this.number2
  }

}
