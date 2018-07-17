const assert = require('assert')
const Printer = require('../printer.js')

describe('Printer', () => {
  describe('.print', () => {
    describe('when no transactions', () => {
      it('returns just the header', () => {
        const expectedResult = ['date || credit || debit || balance']
        const printer = new Printer()

        const result = printer.print([])

        assert.deepEqual(result, expectedResult)
      })
    })
    describe('when transactions have been completed', () => {
      it('returns 1 transaction along with header', () => {
        const expectedResult = [
          'date || credit || debit || balance',
          '16/07/2018 || 300.00 || || 300.00'
        ]

        const printer = new Printer()

        const result = printer.print(
          [
            '16/07/2018 || 300.00 || || 300.00'
          ]
        )

        assert.deepEqual(result, expectedResult)
      })
      it('returns multiple transactions along with header', () => {
        const expectedResult = [
          'date || credit || debit || balance',
          '16/07/2018 || || 600.00 || 500.00',
          '16/07/2018 || 100.00 || || 1100.00',
          '16/07/2018 || 1000.00 || || 1000.00'
        ]
        const printer = new Printer()

        const result = printer.print(
          [
            '16/07/2018 || 1000.00 || || 1000.00',
            '16/07/2018 || 100.00 || || 1100.00',
            '16/07/2018 || || 600.00 || 500.00'
          ]
        )

        assert.deepEqual(result, expectedResult)
      })
    })
  })
})
