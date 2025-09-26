import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  numero1: number = 0; // Ingresos
  numero2: number = 0; // Gastos
  resultado: number = 0; // Balance

  seccionActiva: string = 'ingresos'; // por defecto muestra ingresos

  sumar() {
    this.resultado = (this.numero1 || 0) - (this.numero2 || 0);
  }

  mostrarSeccion(seccion: string) {
    this.seccionActiva = seccion;
  }
}



