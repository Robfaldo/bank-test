class Printer {
  print (transactions) {
    var statement = []
    if (transactions.length > 0) {
      transactions.forEach(function (line) {
        statement.unshift(line)
      })
    }
    statement.unshift('date || credit || debit || balance')
    return statement
  }
}

module.exports = Printer
