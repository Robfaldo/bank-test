const assert = require('assert');
const Account = require('../account.js')
const Printer = require('../printer.js')
const sinon = require('sinon');


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

        assert.deepEqual(result, expectedResult);
      });
    });
    describe('when transactions have been completed', () => {
      it('returns 1 transaction along with header', () => {
        var stub = sinon.stub(Printer.prototype, "format").returns("16/07/2018 || 300.00 || || 300.00");
        const expectedResult = [
          "date || credit || debit || balance",
          "16/07/2018 || 300.00 || || 300.00",
          ]

        const account = new Account();
        account.deposit(300);

        const result = account.printStatement();
        stub.restore();

        assert.deepEqual(result, expectedResult);
      });
      it('returns multiple transactions along with header', () => {
        var stub = sinon.stub(Printer.prototype, "format")
        stub.onCall(0).returns("16/07/2018 || 1000.00 || || 1000.00")
        stub.onCall(1).returns("16/07/2018 || 100.00 || || 1100.00")
        stub.onCall(2).returns("16/07/2018 || || 600.00 || 500.00")
        const expectedResult = [
          "date || credit || debit || balance",
          "16/07/2018 || || 600.00 || 500.00",
          "16/07/2018 || 100.00 || || 1100.00",
          "16/07/2018 || 1000.00 || || 1000.00"
          ]
        const account = new Account();
        account.deposit(1000);
        account.deposit(100);
        account.withdraw(600);

        const result = account.printStatement();
        stub.restore();

        assert.deepEqual(result, expectedResult);
      });
    });
  });
});
