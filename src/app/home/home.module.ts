import {NgModule} from "@angular/core";
import {UserInputComponent} from "./user-input/user-input.component";
import {TransactionComponent} from "./transaction/transaction.component";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    UserInputComponent,
    TransactionComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: []
})
export class HomeModule {

}
