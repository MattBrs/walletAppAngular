import {Component, Input, OnInit} from '@angular/core';
import {User} from "../users.model";
import {UserManagerService} from "../../shared/user-manager.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user')user : User;

  constructor(private userMng: UserManagerService) { }

  userSelected() {
    this.userMng.selectUser(this.user);
    console.log(this.userMng.getTransaction(this.user));
  }

  ngOnInit(): void {
  }

}
