import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  password: string = '';
  email: string = '';
  showpassword: boolean = false
  showemail: boolean = false

  constructor(
    private router: Router,
  ) {
    this.email = '';
    this.password = '';
  }

  login() {
    if (!this.email) {
      this.showemail = true
    } else {
      this.showemail = false
    }
    if (!this.password) {
      this.showpassword = true;
    } else {
      this.showpassword = false;
    }

    if (this.email == 'evelin' && this.password == '123467') {
      alert('login successful!')

      // 🔑 Generar y guardar token en localStorage
      const token = 'token_' + new Date().getTime(); // puedes reemplazar por token real del backend
      localStorage.setItem('token', token);

      // ⏱️ Expirar token en 1 minuto
      setTimeout(() => {
        localStorage.removeItem('token');
        alert('Tu sesión ha expirado, vuelve a iniciar sesión.');
        this.router.navigateByUrl('/login');
      }, 3 * 60 * 1000); // 1 minuto en ms

      this.router.navigateByUrl('/muro')
    } else {
      alert('invalid username or password')
    }
    
  }
}