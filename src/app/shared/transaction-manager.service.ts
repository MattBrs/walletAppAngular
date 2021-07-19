import { Injectable, EventEmitter } from "@angular/core";
import { Transaction } from "./transaction.model";
import {User} from "../users/users.model";
import {UserManagerService} from "./user-manager.service";

@Injectable()
export class TransactionManagerService {
  transactionAdded = new EventEmitter<Transaction[]>();
  private transactions: Transaction[] = [];
  selectedUser: User = null;

  constructor(private userMng: UserManagerService) {
  }

  getTransactions() {
    return this.transactions.slice();
  }

  AddTransaction(trs: Transaction) {
    //this.transactions.push(trs);
    this.userMng.addTransaction(this.selectedUser, trs);
    this.transactions = this.userMng.getTransaction(this.selectedUser);
    console.log(this.userMng.getUsers())
    this.transactionAdded.emit(this.transactions);

  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.transactions = this.userMng.getTransaction(this.selectedUser);
  }
  selectTransactions(trs: Transaction[]){
    this.transactions = trs;
  }

  getUser() {
    return this.selectedUser;
  }

}
