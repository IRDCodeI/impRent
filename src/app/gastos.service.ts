import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  @Output() send: EventEmitter<any> = new EventEmitter();

  constructor() { 
    
  }

}
