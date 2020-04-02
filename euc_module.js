var assert = require('assert')

/*
 * @desc Function to calculate euclidean distance
 * @param a reference vector
 * @param b target vector
 * @return calculated distance value
 */
const eucDistance = (a, b) => {
    return a
        .map((x, i) => Math.abs( x - b[i] ) ** 2) // square the difference
        .reduce((sum, now) => sum + now) // sum
        ** (1/2)
}

/*
 * @desc Function to calculate euclidean distance by batch
 * @param a reference vector
 * @param b target array of vector
 * @param s size of return array
 * @return sorted distance
 */
const calcDistBatch = (a, b, s) => {

	assert(a.length > 0)
	assert(b.length > 0)
	assert(s > 0)
	
	let calcArray = []
	for (var i=0; i<b.length; i++) {
		calcArray.push(eucDistance(a, b[i]))
	}

	var sortedIndex = Array.from(Array(calcArray.length).keys())
                  .sort((a, b) => calcArray[a] < calcArray[b] ? -1 : (calcArray[b] < calcArray[a]) | 0)
	
	let act_size = size => size <= sortedIndex.length ? size : sortedIndex.length
	let ret_val = []
	for (var i=0; i<act_size(s); i++) {
		ret_val.push({
			coor: b[sortedIndex[i]],
			dist: calcArray[sortedIndex[i]]
		})
	}
	return ret_val
}

module.exports = calcDistBatch
