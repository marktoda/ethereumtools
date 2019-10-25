import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

const routes: Routes = [
    { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
