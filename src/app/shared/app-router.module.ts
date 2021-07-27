import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../users/users-router.module').then(m => m.UsersRouterModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./../home/home-router.module').then(m => m.HomeRouterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled'})],
  exports: [RouterModule]
})
export class AppRouterModule {

}
