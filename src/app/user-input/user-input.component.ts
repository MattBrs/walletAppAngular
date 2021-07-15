import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  @Output()trsCreated = new EventEmitter<{trsName: string, trsAmount: number}>();

  transactionName = '';
  transactionAmount = 0;


  constructor() { }

  addTransaction(){
    this.trsCreated.emit({trsName: this.transactionName, trsAmount: this.transactionAmount})
  }

  ngOnInit(): void {
  }

}
