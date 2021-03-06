const assert = require('assert')
const Account = require('../account.js')
const sinon = require('sinon')

describe('Account', () => {
  describe('.balance', () => {
    it('starts with a balance of $0.00', () => {
      const expectedResult = '$0.00'
      const account = new Account()

      const result = account.balance

      assert.equal(result, expectedResult)
    })
  })
  describe('.deposit', () => {
    it('adds the deposit amount to balance', () => {
      const expectedResult = '$100.00'
      const account = new Account()

      account.deposit(100)
      const result = account.balance

      assert.strictEqual(result, expectedResult)
    })
    it('throws error when deposit is empty', () => {
      const account = new Account()

      assert.throws(
        () => {
          account.deposit()
        },
        Error('Deposit amount cannot be empty')
      )
    })
  })
  describe('.withdraw', () => {
    it('removes the withdraw amount from balance', () => {
      const expectedResult = '$200.00'
      const account = new Account()
      account.deposit(500)

      account.withdraw(300)
      const result = account.balance

      assert.strictEqual(result, expectedResult)
    })
    it('throws error when withraw is empty', () => {
      const account = new Account()

      assert.throws(
        () => {
          account.withdraw()
        },
        Error('Withdraw amount cannot be empty')
      )
    })
  })
  describe('.printStatement', () => {
    it('Calls the Printers print method', () => {
      const printerSpy = { print: sinon.spy() }
      const account = new Account(printerSpy)

      account.printStatement()

      assert.ok(printerSpy.print.calledOnce)
    })
  })
})
