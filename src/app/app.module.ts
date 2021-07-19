import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './home/user-input/user-input.component';
import { TransactionComponent } from './home/transaction/transaction.component';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { UsersComponent } from "./users/users.component";
import { UserComponent } from './users/user/user.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';

import { UserManagerService } from "./shared/user-manager.service";
import {TransactionManagerService} from "./shared/transaction-manager.service";
import { SelectCursorDirective } from './users/user/select-cursor.directive';

const appRoutes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    TransactionComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    UsersEditComponent,
    SelectCursorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserManagerService, TransactionManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
