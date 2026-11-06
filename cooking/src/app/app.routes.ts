import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Nosotros } from './pages/nosotros/nosotros';
import { NotFound } from './pages/not-found/not-found';
import { Contactos } from './pages/contactos/contactos';
import { Producto } from './pages/producto/producto';

export const routes: Routes = [
{path: '', component: Inicio},
{path: 'productos', component:Producto},
{path: 'nosotros', component: Nosotros},
{path: 'contactos', component:Contactos},
{path:'**', component:NotFound}

];
