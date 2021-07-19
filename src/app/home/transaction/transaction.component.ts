import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from "../../shared/transaction.model";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  @Input() trs: Transaction;

  constructor() { }

  ngOnInit(): void {
  }

}
