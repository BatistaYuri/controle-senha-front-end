import { Routes } from '@angular/router';
import { PainelGerenteComponent } from './painel-gerente/painel-gerente.component';
import { PainelClienteComponent } from './painel-cliente/painel-cliente.component';

export const PainelRouter: Routes = [
    {
        path: '',
        children: [
            {
                path: 'gerente',
                component: PainelGerenteComponent,
            },
            {
                path: 'cliente',
                component: PainelClienteComponent,
            }
        ]
    }
];
