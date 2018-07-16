class Formatter {
  format(lineData) {
    var deposit = lineData.deposit.toFixed(2);
    var withdraw = lineData.withdraw.toFixed(2);
    var balance = lineData.balance.toFixed(2);
    var formattedLine = "";

    if(withdraw == 0 && deposit > 0) {
      formattedLine = `${lineData.date} || ${deposit} || || ${balance}`;
    } else if (deposit == 0 && withdraw > 0.00) {
      formattedLine = `${lineData.date} || || ${withdraw} || ${balance}`;
    }
    return formattedLine;
  }
}

module.exports = Formatter;
