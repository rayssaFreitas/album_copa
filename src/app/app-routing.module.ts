import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AuthGuard } from './core/middleware/AuthGuard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: '', pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'copa',
        loadChildren: () => import('./pages/copa/copa.module').then(m => m.CopaModule)
      }
    ]
  }
];

export const routing = RouterModule.forRoot(routes)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
