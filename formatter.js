class Formatter {
  transactionLine (lineData) {
    var deposit = lineData.deposit.toFixed(2)
    var withdraw = lineData.withdraw.toFixed(2)
    var balance = lineData.balance.toFixed(2)
    var formattedLine = ''

    if (withdraw == 0 && deposit > 0) {
      formattedLine = `${lineData.date} || ${deposit} || || ${balance}`
    } else if (deposit == 0 && withdraw > 0) {
      formattedLine = `${lineData.date} || || ${withdraw} || ${balance}`
    }
    return formattedLine
  }

  singleIntegerToDollars(amount) {
    return `$${amount.toFixed(2)}`
  }
}

module.exports = Formatter
