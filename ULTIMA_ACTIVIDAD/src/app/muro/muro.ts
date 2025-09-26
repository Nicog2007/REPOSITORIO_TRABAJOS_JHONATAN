import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muro',
  templateUrl: './muro.html',
  styleUrl: './muro.css'
})
export class Muro {
constructor(private router: Router) {}

 Perfil() {
    this.router.navigate(['/perfil']);
  }

  
}


