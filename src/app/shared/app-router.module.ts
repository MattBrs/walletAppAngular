import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import { ShrinkPipe } from './shrink.pipe';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../users/users-router.module').then(m => m.UsersRouterModule)
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./../home/home-router.module').then(m => m.HomeRouterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled'})],
  exports: [RouterModule, ShrinkPipe, FilterPipe],
  declarations: [
    ShrinkPipe,
    FilterPipe
  ]
})
export class AppRouterModule {

}
