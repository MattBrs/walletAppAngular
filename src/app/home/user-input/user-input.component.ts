import {Component, OnInit} from '@angular/core';
import {UserManagerService} from "../../shared/user-manager.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  transactionName = '';
  transactionAmount = 0;
  userId: number = null;

  constructor(private userMng: UserManagerService, private route: ActivatedRoute) { }

  addTrs() {
    this.userMng.addTransaction(
      this.userMng.getUser(this.userId), {
        trsName: this.transactionName,
        trsAmount: this.transactionAmount
      }
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    })
  }

}
