import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserManagerService} from "../../shared/user-manager.service";
import {User} from "../users.model";

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
  @ViewChild('userName') name: ElementRef;

  constructor(private userMngService: UserManagerService) { }

  onAddUser() {
    this.userMngService.addUser(new User( this.name.nativeElement.value, []));
  }


  ngOnInit(): void {
  }

}
