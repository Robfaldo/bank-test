const assert = require('assert');
const Printer = require('../printer.js')

describe('Printer', () => {
  describe('.format', () => {
    it('returns a formatted string with deposit transaction', () => {
      const expectedResult = "16/07/2018 || 300.00 || || 500.00";
      const printer = new Printer();
      const input = { date: "16/07/2018", deposit: 300, withdraw: 0, balance: 500 }

      const result = printer.format(input);

      assert.equal(result, expectedResult)
    });
  });
});
