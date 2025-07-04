import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ListaTareas } from "./lista-tareas/lista-tareas";

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, ListaTareas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todoList';
  cont = 0;
  nuevo = "";
  Tareas: task[] = [];
  mostrar(): void {
    this.Tareas.push({ id: this.cont, name: this.nuevo });
    this.cont = this.cont + 1;
  }
  eliminar(id: number): void {
    this.Tareas = this.Tareas.filter(task => task.id != id);
  }
}
interface task {
  id: number;
  name: string;
}
