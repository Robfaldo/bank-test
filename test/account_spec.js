const assert = require('assert');
const Account = require('../account.js')

describe('Account', () => {
  describe('.balance', () => {
    it('starts with a balance of $0.00', () => {
      expectedResult = "$0.00"
      const account = new Account("12345");

      const result = account.balance;

      assert.equal(result, expectedResult)
    });
  });
});
