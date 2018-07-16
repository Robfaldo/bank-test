class Account {
  constructor(){
    this._balance = 0;
  }

  get balance() {
    return `$${this._balance.toFixed(2)}`;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    this._balance -= amount;
  }

  printStatement() {
    return "date || credit || debit || balance"
  }
}

module.exports = Account;
