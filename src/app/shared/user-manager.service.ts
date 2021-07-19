import {Injectable, EventEmitter} from "@angular/core";
import {User} from "../users/users.model";
import {Transaction} from "./transaction.model";

@Injectable()
export class UserManagerService {
  users: User[] = [];
  userAdded = new EventEmitter<User[]>();
  trsAdded = new EventEmitter<User>();
  selectedUser: User = null;
  transactions: Transaction[] = [];

  constructor() {
  }

  getUsers(): User[] {
    return this.users.slice();
  }

  addUser(item: User){
    this.users.push(item);
    this.userAdded.emit(this.getUsers());
  }

  addTransaction(user: User, trs: Transaction) {
    let index = this.users.indexOf(user);
    this.users[index].transactions.push(trs);
    this.trsAdded.emit(this.users[index]);
  }

  getTransaction(user: User): Transaction[]{
    let index = this.users.indexOf(user);
    return this.users[index].transactions;
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.transactions = this.getTransaction(this.selectedUser);
  }
}
