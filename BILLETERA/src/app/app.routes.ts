import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './dashboard/dashboard';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: 'login',
        component: Login,
    },
    {
        path: 'dashboard',
        component: Dashboard,
    },
    {
        path: 'home',
        component: Home,
    },
    { path: 'dashboard',
     component: Dashboard }

];

