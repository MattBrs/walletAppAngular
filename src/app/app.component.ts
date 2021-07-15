import { Component } from '@angular/core';
import { Transaction } from "./transaction.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  transactions: Transaction[] = [];

  addTransaction(transaction: {trsName: string, trsAmount: number}){
    this.transactions.push(transaction);
    console.table(this.transactions);
  }
  onElementClick(index: number){
    this.transactions.splice(index,1);
  }

}
