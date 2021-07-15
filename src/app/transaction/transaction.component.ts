import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  @Input() trs: {trsName: string, trsAmount: number};

  constructor() { }

  ngOnInit(): void {
  }

}