var eucModule = require('./euc_module')

var a = [90, 100];
var b = [[20, 60], [30, 100], [40, 30]]

var resp = eucModule(a, b)

console.log("Reference Vector: ", a)
console.log("Target Vector: ", b)
console.log("Euc Result: ", resp)
