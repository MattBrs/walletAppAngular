import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {AppRouterModule} from "./shared/app-router.module";
import {HomeModule} from "./home/home.module";
import {UsersModule} from "./users/users.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HomeModule,
    UsersModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
