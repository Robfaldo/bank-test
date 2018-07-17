const assert = require('assert');
const Account = require('../account.js')
const sinon = require('sinon');

describe('Feature', () => {
  describe('after multiple transactions', () => {
    it('prints the customers correct statement', () => {
      expectedResult = [
        "date || credit || debit || balance",
        "14/01/2012 || || 500.00 || 2500.00",
        "13/01/2012 || 2000.00 || || 3000.00",
        "10/01/2012 || 1000.00 || || 1000.00"
      ]
      var account = new Account();
      var stub = sinon.useFakeTimers(+new Date(2012,00,10));
      account.deposit(1000);
      var stub = sinon.useFakeTimers(+new Date(2012,00,13));
      account.deposit(2000);
      var stub = sinon.useFakeTimers(+new Date(2012,00,14));
      account.withdraw(500);

      result = account.printStatement()

      assert.deepEqual(result, expectedResult)
    });
  });
});
