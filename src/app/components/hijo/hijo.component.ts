import { OnChanges, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnChanges {

  @Input() inputNombre: string;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.inputNombre.currentValue) {
      console.log("Recibiendo en el hijo");
      console.log(changes.inputNombre.currentValue);
    }
  }

  ngOnInit(): void {
  }

}
