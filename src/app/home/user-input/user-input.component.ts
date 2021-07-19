import {Component, OnInit} from '@angular/core';
import {UserManagerService} from "../../shared/user-manager.service";


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  transactionName = '';
  transactionAmount = 0;

  constructor(private userMng: UserManagerService) { }

  addTrs() {
    this.userMng.addTransaction(
      this.userMng.selectedUser, {
        trsName: this.transactionName,
        trsAmount: this.transactionAmount
      }
    );
  }

  ngOnInit(): void {
  }

}
