import {Component, OnDestroy, OnInit} from '@angular/core';
import {Transaction} from "../shared/transaction.model";
import {User} from "../users/users.model";
import {UserManagerService} from "../shared/user-manager.service";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {componentTransition} from "../shared/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [componentTransition]
})
export class HomeComponent implements OnInit, OnDestroy {

  transactions: Transaction[] = [];
  user: User = null;
  trsSubscription: Subscription;
  id:number = null;
  filterString = '';

  constructor(private userMng: UserManagerService, private route: ActivatedRoute) {
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

  getUsername() {
    return this.userMng.getUser(this.id).username;
  }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.user = this.userMng.getUser(this.id);
      this.transactions = this.userMng.getTransaction(this.user);
    });
    this.trsSubscription = this.userMng.trsAdded.subscribe(
    (item: User) => {
        this.transactions = item.transactions;
      }
    );
  }

  ngOnDestroy() {
    this.trsSubscription.unsubscribe();
  }
}
