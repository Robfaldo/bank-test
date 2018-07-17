# Bank-test tech test
==================

## Instructions:  

Requirements
```
You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).
```

Acceptance criteria
```
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see
```

## Getting started

Fork this repo and clone to your local machine (assumes you have NodeJs installed)

```
> npm install
```

## Running tests

Run
``` npm test ```
from the root directory

## Usage

Create a new account
```
const account = new Account();
```
Deposit money
```
account.deposit(150);
```
Withdraw money
```
account.withdraw(50);
```
Check balance
```
account.balance;
```
Print statement
```
account.printStatement()
>>> [ 'date || credit || debit || balance',
  '16/07/2018 || 50.00 || || 200.00',
  '16/07/2018 || 150.00 || || 150.00' ]
```

## Tech/Framework used

* __Javascript__ (2.4.1)
* __nodejs__
* __sinon__ for stubbing
* __mocha__ for testing

## Approach:

1. Turn the requirements into user stories

```
As a customer,
So that I can add funds to my account,
I need to be able to make a deposit.
```
```

As a customer,
So that I can access the funds in my account,
I need to be able to make a withdrawal.
```
```
As a customer,
So that I can see my previous transactions and account balance,
I need to be able to print my account statement.
```
2. Quick diagram of suspected objects and messages
3. Write feature test (Feature - Red)
4. Get a matching failure at the unit test level (Red)
5. Implement the behaviour (Green)
6. Refactor
7. Repeat 4-6 until feature test passing (Feature - Green)
8. Refactor
