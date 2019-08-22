import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampanhaComponent } from './campanha/campanha.component';
import { AreaComponent } from './area/area.component';
import { CentroDeCustoComponent } from './centro-de-custo/centro-de-custo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [];

const appRoutes: Routes = [
  { path: '',
    component: CampanhaComponent,
  },
  { path: 'campanhas',
    component: CampanhaComponent,
  },
  { path: 'areas',
    component: AreaComponent,
  },
  { path: 'centrodecusto',
    component: CentroDeCustoComponent,
  },
  { path: 'usuarios',
    component: UsuariosComponent,
  }
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
exports: [RouterModule]
})  

export class AppRoutingModule { }
