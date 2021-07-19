import {Component, OnInit} from '@angular/core';
import {TransactionManagerService} from "../../shared/transaction-manager.service";

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  transactionName = '';
  transactionAmount = 0;

  constructor(private trsManager: TransactionManagerService) { }

  addTransaction(){
    this.trsManager.AddTransaction({trsName: this.transactionName, trsAmount: this.transactionAmount});
  }

  ngOnInit(): void {
  }

}
