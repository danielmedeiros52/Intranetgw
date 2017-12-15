import { GrupoClienteFornecedoresComponent } from './grupo-cliente-fornecedores/grupo-cliente-fornecedores.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { NavBarComponent } from './nav-bar/nav-bar.component';



const INTRANET_ROUTES: Routes = [
    {
        path:'',
        component: NavBarComponent,
       
    },

    {
        path:'Grupo_de_clientes_e_fornecedores' ,
        component: GrupoClienteFornecedoresComponent,
        
       
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(INTRANET_ROUTES);