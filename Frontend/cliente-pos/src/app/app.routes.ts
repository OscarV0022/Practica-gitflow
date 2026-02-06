import { Routes } from '@angular/router';
import { Pos } from './components/pos/pos';
import { Encargos } from './components/encargos/encargos';

export const routes: Routes = [
    { path: '', component: Pos },
    {path: 'encargos', component: Encargos},
    { path: '**', redirectTo: '' },
];