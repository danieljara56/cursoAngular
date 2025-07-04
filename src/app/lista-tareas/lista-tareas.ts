import { CommonModule } from '@angular/common';
import { Component, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-tareas',
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css',
})
export class ListaTareas {
  @Input() Tareas: task[] = [];

  idTask = output<number>();
  cont = 0;
  eliminar(id: number): void {
    this.idTask.emit(id);
  }
}
interface task {
  id: number;
  name: string;
}
