var dateFormat = require('dateformat');

class Account {
  constructor(){
    this._balance = 0;
    this._transactionsHistory = [];
  }

  get balance() {
    return `$${this._balance.toFixed(2)}`;
  }

  deposit(amount) {
    this._balance += amount;
    var transactionLine = `${dateFormat(new Date(), "dd/mm/yyyy")} || ${amount.toFixed(2)} || || ${this._balance.toFixed(2)}`;
    this._transactionsHistory.push(transactionLine);
  }

  withdraw(amount) {
    this._balance -= amount;
    var transactionLine = `${dateFormat(new Date(), "dd/mm/yyyy")} || || ${amount.toFixed(2)} || ${this._balance.toFixed(2)}`
    this._transactionsHistory.push(transactionLine)
  }

  printStatement() {
    var statement = ["date || credit || debit || balance"];
    this._transactionsHistory.forEach(function(transaction){
      statement.push(transaction);
    });
    return statement;
  }
}

module.exports = Account;
