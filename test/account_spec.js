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

  describe('.withdraw', () => {
    it('removes the withdraw amount from balance', () => {
      const expectedResult = "$200.00";
      const account = new Account();
      account.deposit(500);

      account.withdraw(300);
      const result = account.balance;

      assert.strictEqual(result, expectedResult);
    });
  });

  describe('.printStatement()', () => {
    describe('when no transactions', () => {
      it('returns just the header', () => {
        const expectedResult = ["date || credit || debit || balance"]
        const account = new Account();

        const result = account.printStatement();

        assert.equal(result, expectedResult);
      });
    });
  });
});
