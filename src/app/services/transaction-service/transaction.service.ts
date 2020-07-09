import { Injectable } from '@angular/core';
import Transactions from '../../mock/transactions.json';
import { Transaction } from '../../models/transaction/transaction'

@Injectable()

export class TransactionService {
  // Gets the transaction data from the mock json file
  getTransactions(): Transaction[] {
    return Transactions.data;
  }

  // Adds new transactions to the top of the array
  addTransaction(transaction: Transaction) {
    Transactions.data.unshift(transaction);
  }
}
