import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction/transaction';
import { TransactionService } from '../../services/transaction-service/transaction.service';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.scss']
})
export class RecentTransactionsComponent implements OnInit {
  public transactions: Array<Transaction>;
  public filterValue: string;
  value = '';
  ascendingOrder = false;
  sortBy: string;

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    // Gets transaction data from the transactionService
    this.transactions = this.transactionService.getTransactions();
  }

  // Used for search functionality
  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

  // Used for sorting buttons
  sortTransactions(sortBy: string) {
    // Persistent sorting order across all sorting options
    // i.e. If you are sorting by beneficiary ASC and switch the sorting option to Amount,
    // the sorting order should stay ASC
    if (this.sortBy == sortBy) this.ascendingOrder = !this.ascendingOrder;

    this.sortBy = sortBy;

    if (sortBy === 'amount') {
      if (this.ascendingOrder) {
        return this.transactions.sort((a, b) => Number(a.amount) - Number(b.amount));
      }
      return this.transactions.sort((a, b) => Number(a.amount) - Number(b.amount)).reverse();
    } else if (sortBy === 'date') {
      if (this.ascendingOrder) {
        return this.transactions.sort((a, b) => Number(a.transactionDate) - Number(b.transactionDate));
      }
      return this.transactions.sort((a, b) => Number(b.transactionDate) - Number(a.transactionDate));
    }

    // Default to sorting by beneficiary
    if (this.ascendingOrder) {
      return this.transactions.sort((a, b) => a.merchant.localeCompare(b.merchant));
    }
    return this.transactions.sort((a, b) => a.merchant.localeCompare(b.merchant)).reverse();
  }
}
