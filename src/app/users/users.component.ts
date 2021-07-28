import {Component, OnDestroy, OnInit} from "@angular/core";
import {User} from "./users.model";
import {UserManagerService} from "../shared/user-manager.service";
import {Subscription} from "rxjs";
import {componentTransition} from "../shared/animations";

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  animations: [componentTransition]
})
export class UsersComponent implements OnInit, OnDestroy {
  users: User[];
  usrSubscription: Subscription;



  constructor(private userMngService: UserManagerService) {
  }

  onSaveData() {
    this.userMngService.sendData();
  }

  onFetchData() {
    this.userMngService.fetchData();
  }



  ngOnInit() {
    this.users = this.userMngService.getUsers();
    this.usrSubscription = this.userMngService.userAdded.subscribe(
      (users: User[]) => {
        this.users = users;
      }
    );
  }

  ngOnDestroy() {
    this.usrSubscription.unsubscribe();
  }

}
