const dateFormat = require('dateformat');
const Formatter = require('./formatter.js');
const Printer = require('./printer.js');

class Account {
  constructor(formatter = Formatter, printer = Printer) {
    this._formatter = new formatter();
    this._printer = new Printer();
    this._balance = 0;
    this._transactionsHistory = [];
  }

  get balance() {
    return `$${this._balance.toFixed(2)}`;
  }

  deposit(amount) {
    this._balance += amount;
    var transactionLine = this._formatter.format(
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
    var transactionLine = this._formatter.format(
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
    return this._printer.print(this._transactionsHistory);
  }
}

module.exports = Account;
