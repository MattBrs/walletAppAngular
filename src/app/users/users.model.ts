import {Transaction} from "../shared/transaction.model";

export class User {
  constructor(public username: string, public transactions: Transaction[]) {
  }


}
