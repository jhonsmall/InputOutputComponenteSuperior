import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'padrehijo';
  nombre = 'Juan';

  RecibiendoDePadre(data: string) {
    console.log("Recibiendo en el component SUPERIOR");
    console.log(data);
    this.nombre = data;
  }

}
