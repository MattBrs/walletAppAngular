import {NgModule} from "@angular/core";
import {UsersComponent} from "./users.component";
import {UserComponent} from "./user/user.component";
import {UsersEditComponent} from "./users-edit/users-edit.component";
import {UsersRouterModule} from "./users-router.module";
import {CommonModule} from "@angular/common";
import {SelectCursorDirective} from "./user/select-cursor.directive";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UsersEditComponent,
    SelectCursorDirective
  ],
  imports: [
    UsersRouterModule,
    CommonModule,
    BrowserAnimationsModule
  ],

})
export class UsersModule {

}
