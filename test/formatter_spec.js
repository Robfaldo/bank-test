const assert = require('assert')
const Formatter = require('../formatter.js')

describe('Formatter', () => {
  describe('.transactionLine', () => {
    it('returns a formatted string with deposit transaction', () => {
      const expectedResult = '16/07/2018 || 300.00 || || 500.00'
      const formatter = new Formatter()
      const input = { date: '16/07/2018', deposit: 300, withdraw: 0, balance: 500 }

      const result = formatter.transactionLine(input)

      assert.equal(result, expectedResult)
    })
    it('returns a formatted string with withdraw transaction', () => {
      const expectedResult = '16/07/2018 || || 300.00 || 0.00'
      const formatter = new Formatter()
      const input = { date: '16/07/2018', deposit: 0, withdraw: 300, balance: 0.00 }

      const result = formatter.transactionLine(input)

      assert.equal(result, expectedResult)
    })
  })
})
