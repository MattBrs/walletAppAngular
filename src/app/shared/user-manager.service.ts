import {Injectable} from "@angular/core";
import {User} from "../users/users.model";
import {Transaction} from "./transaction.model";
import {Subject} from "rxjs";

@Injectable()
export class UserManagerService {
  users: User[] = [];
  userAdded = new Subject<User[]>();
  trsAdded = new Subject<User>();
  selectedUser: User = null;
  transactions: Transaction[] = [];

  constructor() {
  }

  getUsers(): User[] {
    return this.users.slice();
  }

  addUser(item: User){
    this.users.push(item);
    this.userAdded.next(this.getUsers());
  }

  addTransaction(user: User, trs: Transaction) {
    let index = this.users.indexOf(user);
    this.users[index].transactions.push(trs);
    this.trsAdded.next(this.users[index]);
  }

  getTransaction(user: User): Transaction[]{
    if(user != null){
      let index = this.users.indexOf(user);
      return this.users[index].transactions;
    }else{
      // do nothing
    }
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.transactions = this.getTransaction(this.selectedUser);
  }
}
