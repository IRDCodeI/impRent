import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  items: any[] = [
    { id: 1, name: 'Vivienda'},
    { id: 2, name: 'Educacion'},
    { id: 3, name: 'Alimentacion'},
    { id: 4, name: 'Vestimenta'},
    { id: 5, name: 'Turismo'},
    { id: 6, name: 'Salud'}
  ]

  type: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  gastos = new Map();
}
