import { Component, OnInit } from '@angular/core';
import {TransactionManagerService} from "../shared/transaction-manager.service";
import {Transaction} from "../shared/transaction.model";
import {User} from "../users/users.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  transactions: Transaction[];
  user: User;

  constructor(private trsManager: TransactionManagerService) {
  }


  onElementClick(index: number){
    this.transactions.splice(index,1);
  }

  getTotalAmount(){
    let sum = 0;
    for(let trs of this.transactions){
      sum += trs.trsAmount;
    }
    return sum;
  }

  checkIstance() {
    return this.trsManager.selectedUser;
  }

  getUsername() {
    return this.trsManager.getUser().username;
  }

  ngOnInit() {
    this.transactions = this.trsManager.getTransactions();
    this.trsManager.transactionAdded.subscribe(
      (items: Transaction[]) => {
        this.transactions = items;
      }
    );
  }

}
