import {Component, Input, OnInit} from '@angular/core';
import {User} from "../users.model";
import {TransactionManagerService} from "../../shared/transaction-manager.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user')user : User;

  constructor(private trsManager: TransactionManagerService) { }

  userSelected() {
    this.trsManager.selectUser(this.user);
    //this.trsManager.selectTransactions(this.user.transactions);
  }

  ngOnInit(): void {
  }

}
