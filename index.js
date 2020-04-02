var eucModule = require('./euc_module')

var a = [90, 100];
var b = [[20, 60], 
		 [30, 100], 
		 [40, 30],
		 [25, 65],
		 [46, 120]]

var resp = eucModule(a, b, 3)

console.log("Reference Vector: ", a)
console.log("Target Vector: ", b)
console.log("Euc Result: ", resp)
