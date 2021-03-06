import {Injectable, OnInit} from "@angular/core";
import {User} from "../users/users.model";
import {Transaction} from "./transaction.model";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {debugOutputAstAsTypeScript} from "@angular/compiler";

@Injectable({providedIn: 'root'})
export class UserManagerService{
  users: User[] = [];
  userAdded = new Subject<User[]>();
  trsAdded = new Subject<User>();
  selectedUser: User = null;
  transactions: Transaction[] = [];

  constructor(private http: HttpClient) {
  }

  getUsers(): User[] {
    return this.users.slice();
  }

  getUser(id: number){
    return this.users[id];
  }

  getUserId(user: User) {
    return this.users.indexOf(user);
  }

  addUser(item: User){
    this.users.push(item);
    this.userAdded.next(this.getUsers());
  }

  addTransaction(user: User, trs: Transaction) {
    let index = this.users.indexOf(user);
    this.users[index].transactions.push(trs);
    this.trsAdded.next(this.users[index]);
  }

  getTransaction(user: User): Transaction[]{
    if(user != null){
      let index = this.users.indexOf(user);
      return this.users[index].transactions;
    }else{
      // do nothing
    }
  }

  selectUser(user: User) {
    this.selectedUser = user;
    this.transactions = this.getTransaction(this.selectedUser);
  }

  sendData() {
    this.http.put<User[]>(
      'https://transactions-70c68-default-rtdb.europe-west1.firebasedatabase.app/users.json',
      this.users
    ).subscribe(
      data => {
        console.log(data);
      }
    );
  }

  fetchData() {
    this.http.get<User[]>('https://transactions-70c68-default-rtdb.europe-west1.firebasedatabase.app/users.json')
      .subscribe(
        data => {
          this.users = data;
          console.log(this.users);
          this.userAdded.next(this.getUsers());
          localStorage.setItem('users', JSON.stringify(this.getUsers()));

        }, error => {
          alert(error.error.error);
        }
      );
  }

  autoFetch() {
    if(localStorage.getItem('users')!= null){
      this.users = <User[]>JSON.parse(localStorage.getItem('users'));
    }else{
      this.fetchData();
    }
  }

}
