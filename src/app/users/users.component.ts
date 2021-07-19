import {Component, OnInit} from "@angular/core";
import {User} from "./users.model";
import {UserManagerService} from "../shared/user-manager.service";

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userMngService: UserManagerService) {
  }

  ngOnInit() {
    this.users = this.userMngService.getUsers();
    this.userMngService.userAdded.subscribe(
      (users: User[]) => {
        this.users = users;
        console.log(users);
      }
    );
  }


}
