import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel.component';
import { PainelGerenteComponent } from './painel-gerente/painel-gerente.component';
import { PainelComponentComponent } from './painel-component/painel-component.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PainelClienteComponent } from './painel-cliente/painel-cliente.component';
import { RouterModule } from '@angular/router';
import { PainelRouter } from './painel-routing'


@NgModule({
  declarations: [PainelComponent, PainelGerenteComponent, PainelComponentComponent, PainelClienteComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(PainelRouter),
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule
  ]
})
export class PainelModule { }
