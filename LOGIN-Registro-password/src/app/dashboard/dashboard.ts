import { Component } from '@angular/core';
import { Login } from '../login/login';
import { Register } from '../register/register';


@Component({
  selector: 'app-dashboard',
  imports: [Login,Register],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  direccion: boolean = true;
  Direccionar(){
  this.direccion = false
}
}
