import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './reactivo.html',
  styleUrl: './reactivo.css'
})
export class Reactivo {
  correo: string = "";
  correos: string[] = [];
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
  });
  handleSubmit() {
    this.correos.push(this.correo);
  }
}