import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Muro } from './muro/muro';
import { Perfil } from './perfil/perfil';
import { Component } from '@angular/core';

export const routes: Routes = [
    {
        path: 'login',
        component: Login,
    },
    {
      path: 'muro',
      component: Muro,
    },
    {
    path: 'perfil',
    component: Perfil,
    },
];

