const assert = require('assert');

describe('Customer can interact with bank', () => {
  describe('Successfully', () => {
    it('prints the customers correct statement', () => {
      // Setup
      // will need to stub the date given

      expectedResult = [
        "date || credit || debit || balance",
        "14/01/2012 || || 500.00 || 2500.00",
        "13/01/2012 || 2000.00 || || 3000.00",
        "10/01/2012 || 1000.00 || || 1000.00"
      ]

      account = new Account();
      account.deposit(1000);
      account.deposit(2000);
      account.withdraw(500);

      result = account.printStatement()

      assert.equal(result, expectedResult)
    });
  });
});
