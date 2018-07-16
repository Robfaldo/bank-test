const dateFormat = require('dateformat');
const Printer = require('./printer.js')

class Account {
  constructor(printer = Printer) {
    this._printer = new printer();
    this._balance = 0;
    this._transactionsHistory = [];
  }

  get balance() {
    return `$${this._balance.toFixed(2)}`;
  }

  deposit(amount) {
    this._balance += amount;
    var transactionLine = this._printer.format(
      {
        date: dateFormat(new Date(), "dd/mm/yyyy"),
        deposit: amount,
        withdraw: 0,
        balance: this._balance
      }
    )
    this._transactionsHistory.push(transactionLine);
  }

  withdraw(amount) {
    this._balance -= amount;
    var transactionLine = this._printer.format(
      {
        date: dateFormat(new Date(), "dd/mm/yyyy"),
        deposit: 0,
        withdraw: amount,
        balance: this._balance
      }
    )
    this._transactionsHistory.push(transactionLine)
  }

  printStatement() {
    var statement = [];
    this._transactionsHistory.forEach(function(transaction){
      statement.unshift(transaction);
    });
    statement.unshift("date || credit || debit || balance");
    return statement;
  }
}

module.exports = Account;
