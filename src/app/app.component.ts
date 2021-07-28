import {Component, OnInit} from '@angular/core';
import {UserManagerService} from "./shared/user-manager.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  constructor(private userMngService: UserManagerService) {
  }
  ngOnInit() {
    this.userMngService.autoFetch();
  }

}
