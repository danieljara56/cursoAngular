import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todoList';
  cont = 0;
  nuevo = "";
  //users:task[] =  [{id: 0, name: 'Sarah'}, {id: 1, name: 'Amy'}, {id: 2, name: 'Rachel'}, {id: 3, name: 'Jessica'}, {id: 4, name: 'Poornima'}];
users:task[] =  [];
   mostrar(): void {
    this.users.push({id:this.cont,name:this.nuevo});
    this.cont = this.cont + 1;
  }
  eliminar(id:number): void {
    this.users = this.users.filter(task => task.id != id);
  }
}
interface task{
  id:number;
  name:string;
}
