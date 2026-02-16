import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'contact', component: Contact },
    { path: 'about', component: About },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
];
