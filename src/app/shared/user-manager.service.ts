import {Injectable, EventEmitter} from "@angular/core";
import {User} from "../users/users.model";
import {Transaction} from "./transaction.model";

@Injectable()
export class UserManagerService {
  users: User[] = [];
  userAdded = new EventEmitter<User[]>();

  constructor() {
  }

  getUsers() {
    return this.users.slice();
  }

  addUser(item: User){
    this.users.push(item);
    this.userAdded.emit(this.getUsers());
  }

  addTransaction(user: User, trs: Transaction) {
    let index = this.users.indexOf(user);
    this.users[index].transactions.push(trs);
  }

  getTransaction(user: User) {
    let index = this.users.indexOf(user);
    return this.users[index].transactions;
  }

}
