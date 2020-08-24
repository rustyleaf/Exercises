const toRoman = function(num, numMap = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }) {

    return Object.entries(numMap)
        .reduce(function (R, pair, i, arr) {        
            const [letter, value] = pair                 
            R += letter.repeat(Math.floor(num/value))
            num = num%value        
            return R
            }, '')
        .replace('DCCCC', 'CM')
        .replace('CCCC', 'CD')
        .replace('LXXXX', 'XC')
        .replace('XXXX', 'XL')
        .replace('VIIII', 'IX')
        .replace('IIII', 'IV')        
    }

module.exports = toRoman