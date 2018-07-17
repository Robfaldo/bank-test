const dateFormat = require('dateformat')
const Formatter = require('./formatter.js')
const Printer = require('./printer.js')

class Account {
  constructor (printer = new Printer(), formatter = new Formatter()) {
    this._formatter = formatter
    this._printer = printer
    this._balance = 0
    this._transactionsHistory = []
  }

  get balance () {
    return `$${this._balance.toFixed(2)}`
  }

  deposit (amount) {
    this.throwErrorIfEmpty(amount, "Deposit")
    this._balance += amount
    var transactionLine = this._formatter.format(
      {
        date: dateFormat(new Date(), 'dd/mm/yyyy'),
        deposit: amount,
        withdraw: 0,
        balance: this._balance
      }
    )
    this._transactionsHistory.push(transactionLine)
  }

  withdraw (amount) {
    this.throwErrorIfEmpty(amount, "Withdraw")
    this._balance -= amount
    var transactionLine = this._formatter.format(
      {
        date: dateFormat(new Date(), 'dd/mm/yyyy'),
        deposit: 0,
        withdraw: amount,
        balance: this._balance
      }
    )
    this._transactionsHistory.push(transactionLine)
  }

  printStatement () {
    return this._printer.print(this._transactionsHistory)
  }

  throwErrorIfEmpty(amount, transactionType) {
    if (amount === undefined) {
      throw new Error(`${transactionType} amount cannot be empty`)
    }
  }
}

module.exports = Account
