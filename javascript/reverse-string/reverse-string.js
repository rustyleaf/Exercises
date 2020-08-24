
const reverseString = function(str) {
    return str.split('').reduce( (rs, curr) => curr + rs, '')
}

module.exports = reverseString