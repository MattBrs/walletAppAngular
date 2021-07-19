import {Component, OnInit} from '@angular/core';
import { Transaction } from "./shared/transaction.model";
import {TransactionManagerService} from "./shared/transaction-manager.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TransactionManagerService]
})
export class AppComponent implements OnInit {
  transactions: Transaction[];

  constructor(private trsManager: TransactionManagerService) {
  }

  addTransaction(transaction: Transaction){
    this.transactions.push(transaction);
    console.table(this.transactions);
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

  ngOnInit() {
    this.transactions = this.trsManager.getTransactions();
    this.trsManager.transactionAdded.subscribe(
      (items: Transaction[]) => {
        this.transactions = items;
      }
    );
  }

}
