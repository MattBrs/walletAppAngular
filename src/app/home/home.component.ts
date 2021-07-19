import { Component, OnInit } from '@angular/core';
import {Transaction} from "../shared/transaction.model";
import {User} from "../users/users.model";
import {UserManagerService} from "../shared/user-manager.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  transactions: Transaction[] = [];
  user: User = null;

  constructor(private userMng: UserManagerService) {
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
    return this.userMng.selectedUser;
  }

  getUsername() {
    return this.userMng.selectedUser.username;
  }

  ngOnInit() {
    this.user = this.userMng.selectedUser;
    this.transactions = this.userMng.getTransaction(this.user);
    this.userMng.trsAdded.subscribe(
    (item: User) => {
        this.transactions = item.transactions;
      }
    );

  }

}
