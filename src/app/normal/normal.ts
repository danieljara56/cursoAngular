import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-normal',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './normal.html',
  styleUrl: './normal.css'
})
export class Normal {
  nombre: string = "";
  nombres: string[] = [];

  enviar(){
    if(this.nombre.trim()){
      this.nombres.push(this.nombre.trim());
      this.nombre = "";
      console.log(this.nombres);
    }
  }

}
