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
    this.throwErrorIfEmpty(amount, 'Deposit')
    this._balance += amount
    var line = this.createTransactionLine({depositAmount: amount, withdrawAmount: 0})
    this._transactionsHistory.push(line)
  }

  withdraw (amount) {
    this.throwErrorIfEmpty(amount, 'Withdraw')
    this._balance -= amount
    var line = this.createTransactionLine({depositAmount: 0, withdrawAmount: amount})
    this._transactionsHistory.push(line)
  }

  printStatement () {
    return this._printer.print(this._transactionsHistory)
  }

  throwErrorIfEmpty (amount, transactionType) {
    if (amount === undefined) {
      throw new Error(`${transactionType} amount cannot be empty`)
    }
  }

  createTransactionLine (amount) {
    var transactionLine = this._formatter.transactionLine(
      {
        date: dateFormat(new Date(), 'dd/mm/yyyy'),
        deposit: amount.depositAmount,
        withdraw: amount.withdrawAmount,
        balance: this._balance
      }
    )
    return transactionLine
  }
}

module.exports = Account
