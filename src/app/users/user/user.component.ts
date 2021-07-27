import {Component, Input, OnInit} from '@angular/core';
import {User} from "../users.model";
import {UserManagerService} from "../../shared/user-manager.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [
    trigger('userAnimation', [
      state('*', style({
        transform: 'translateX(0)',
        opacity: '1'
      })),
      transition('void => *', [
        style({
          opacity: '0',
          transform: 'translateX(100px)'
        }),
        animate(500)
      ]),
    ])
  ]
})
export class UserComponent implements OnInit {

  @Input('user')user : User;

  constructor(private userMng: UserManagerService, private route: ActivatedRoute, private router: Router) { }

  userSelected() {
    this.userMng.selectUser(this.user);
    this.router.navigate(['/home', this.userMng.getUserId(this.user)]);
  }

  ngOnInit(): void {
  }

}
