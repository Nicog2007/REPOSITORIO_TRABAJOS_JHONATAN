import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {

      persona = {
    nombre: "Laura Gómez",
    cargo: "Diseñadora UX",
    foto: "https://i.pravatar.cc/200?img=47",
    demograficos: {
      edad: 29,
      estadoCivil: "Soltera",
      claseSocial: "Media",
      localizacion: "Bogotá, Colombia",
      profesion: "Diseñadora UX",
      sexo: "Femenino",
      trabajo: "Agencia Creativa XYZ",
      educacion: "Diseño Gráfico - Universidad Nacional"
    },
    comportamentales: {
      motivaciones: "Diseñar experiencias fáciles y útiles",
      objetivos: "Convertirse en líder de UX",
      gustos: "Viajes, ilustración digital, café",
      miedos: "No estar a la altura de las expectativas",
      preocupaciones: "Falta de tiempo en proyectos",
      comportamientoWeb: "Investiga en blogs y portales de diseño",
      comportamientoInternet: "Usa redes sociales y busca inspiración en Dribbble/Behance"
    },
    biografia: "Soy Laura, una diseñadora apasionada por mejorar la experiencia de los usuarios. Creo que un buen diseño puede cambiar vidas. Mis valores son la empatía, la creatividad y el trabajo en equipo."
  };
}