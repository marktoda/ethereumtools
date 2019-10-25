import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), pathMatch: 'prefix' },
            { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), pathMatch: 'prefix' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
