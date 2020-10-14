import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  @Output() eventSalidaNombre = new EventEmitter<string>();

  nombre = '';

  constructor() { }

  ngOnInit(): void {
  }

  CambiandoTexto(texto: any): void {
    console.log("Texto en el padre");
    console.log(this.nombre);
    this.eventSalidaNombre.emit(this.nombre);
  }

}
