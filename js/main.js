var exchangePenToMXN = 5.81
var pen = 2500
var totalMxn = pen * exchangePenToMXN // cambiar soles a pesos mexicanos

var exchangeMxnToUSD = 0.052 //cambiar pesos mexicanos a USD
var totalUSD = totalMxn * exchangeMxnToUSD

var exchangeMxnToEUR = 0.047 //cambiar pesos mexicanos a EUR
var totalEUR = totalMxn * exchangeMxnToEUR

console.log ('Tengo '+ totalUSD + ' Dolares')
console.log ('Tengo '+ totalEUR + ' Euros')