import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from "@angular/forms";
import { Transaction } from '../../models/transaction/transaction';
import { TransactionService } from '../../services/transaction-service/transaction.service';
import { BalanceService } from '../../services/balance-service/balance.service';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {
  transaction: Transaction;
  accountBalance: number;
  transactionForm: FormGroup;
  amount: number;
  merchant: string;

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(fb: FormBuilder,
    private transactionService: TransactionService,
    private balanceService: BalanceService) {

    this.transactionForm = fb.group({
      merchant: [null, Validators.required],
      amount: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.accountBalance = this.balanceService.getBalance();
  }

  // This is the submit function for the transfer form
  // Handles validation and assures the user's balance
  // does not go below -$500.00
  addTransaction(form: any) {
    if (this.accountBalance - form.amount < -500) {
      alert("Balance cannot be overdrawn more than $500.00");
      return;
    }

    if (this.transactionForm.dirty && this.transactionForm.valid) {
      if(confirm("Are you sure you want to send " + form.merchant + ' $' + form.amount + '?')) {
        this.transaction = new Transaction(form.amount, null, form.merchant, null, new Date(), 'Online Transfer');
        this.transactionService.addTransaction(this.transaction);
        this.accountBalance = this.balanceService.subtractTransaction(form.amount);

        //to reset form
        setTimeout(() => this.transactionForm.reset(), 0);
        setTimeout(() => this.formGroupDirective.resetForm(), 0);
      }
    }
  }

}
