export class Transaction {
  public amount: string;
  public categoryCode: string;
  public merchant: string;
  public merchantLogo: any;
  public transactionDate: Date;
  public transactionType: string;

  constructor(amount: string, categoryCode: string, merchant: string, merchantLogo: any, transactionDate: Date, transactionType: string) {
    this.amount = amount;
    this.categoryCode = categoryCode;
    this.merchant = merchant;
    this.merchantLogo = merchantLogo;
    this.transactionDate = transactionDate;
    this.transactionType = transactionType;
  }
}
