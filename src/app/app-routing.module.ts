import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'banner' },
  {
    path: '',
    children: [{ path: 'banner', loadChildren: () => import('./banner/banner.module').then((m) => m.BannerModule) }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
