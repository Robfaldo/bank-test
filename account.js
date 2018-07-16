class Account {
  constructor(){
    this._balance = 0;
  }

  get balance() {
    return `$${this._balance.toFixed(2)}`;
  }
}

module.exports = Account;
