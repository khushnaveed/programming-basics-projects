/* Create a class called BankAccount.
Add properties:
accountHolder (e.g., "John Doe")
balance (starts at 0)
Add methods:
deposit(amount) - This method should increase the balance by the amount deposited.
withdraw(amount) - This method should decrease the balance by the amount withdrawn, but not allow the balance to go below 0.
getBalance() - This method should return the current balance. */

class BankAccount {
  constructor(accountHolder) {
    this.accountHolder = accountHolder;
    this.balance = 0;
  }

  deposit(amount) {
    this.balance = this.balance + amount;
  }

  withdraw(amount) {
    this.balance = this.balance - amount;
  }

  getBalance() {
    return this.balance;
  }
}


const account = new BankAccount("John");
account.deposit(50);
account.withdraw(50);
console.log(account.getBalance());