import { Routes } from '@angular/router';
import { PainelGerenteComponent } from './painel-gerente/painel-gerente.component';
import { PainelClienteComponent } from './painel-cliente/painel-cliente.component';
import { PainelComponent } from './painel.component';

export const PainelRouter: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: PainelComponent,
            },
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
