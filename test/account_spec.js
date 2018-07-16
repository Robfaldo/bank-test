const assert = require('assert');
const Account = require('../account.js')

describe('Account', () => {
  describe('.balance', () => {
    it('starts with a balance of $0.00', () => {
      const expectedResult = "$0.00"
      const account = new Account();

      const result = account.balance;

      assert.equal(result, expectedResult)
    });
  });

  describe('.deposit', () => {
    it('adds the deposit amount to balance', () => {
      const expectedResult = "$100.00";
      const account = new Account();

      account.deposit(100);
      const result = account.balance;

      assert.strictEqual(result, expectedResult)
    });
  });
});
