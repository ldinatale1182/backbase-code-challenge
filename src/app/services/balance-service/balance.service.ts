import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// Takes care of managing the user's account balance
export class BalanceService {
  accountBalance: number;

  constructor() {
    this.accountBalance = 5824.76;
  }

  // Gets the user's account balance
  getBalance(): number {
    return this.accountBalance;
  }

  // Calculates the new account balance after a new
  // transaction is created
  subtractTransaction(amount: number) {
    this.accountBalance = this.accountBalance - amount;
    return this.accountBalance;
  }
}
