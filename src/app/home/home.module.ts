import {NgModule} from "@angular/core";
import {UserInputComponent} from "./user-input/user-input.component";
import {TransactionComponent} from "./transaction/transaction.component";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {AppRouterModule} from "../shared/app-router.module";

@NgModule({
  declarations: [
    UserInputComponent,
    TransactionComponent,
    HomeComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        AppRouterModule,
    ],
  exports: []
})
export class HomeModule {

}
