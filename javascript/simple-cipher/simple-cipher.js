const modulus = (x, y) => {
  if (y > 0) {
    // We don't use JavaScript's % operator here as this doesn't work    
    return x - y * Math.floor(x / y)
  } else if (y === 0) {
    return x
  } else { // y < 0    
    throw new Error('Cannot calculate mod for a negative divisor')
  }
}

// same for encode/decode except for past in function (fn)
const translate = (str, fn, key, alphaMap) => {
  if (str.length > key.length) {
    key = key.repeat(Math.round(str.length / key.length) + 1);
  }
  return str
    .trim()
    .split('')
    .map((c, i) => fn(alphaMap.indexOf(c), alphaMap.indexOf(numToLetter(i, key))))
    .map(x => modulus(x, alphaMap.length))
    .map(c => alphaMap[c])
    .join('');
}

// add values
const encodeLetter = (letterVal, keyVal) => {
  return (letterVal + keyVal);
}

// subtract values
const decodeLetter = (letterVal, keyVal) => {
  return (letterVal - keyVal);
}

// returns letter based upon position in alphabet
const numToLetter = (num, key) => {
  return key.charAt(num);
}

// returns string of random lowercase alpha characters
const createKey = (n = 120, fn = Math.random) => {
  return Array.from({length: n}, () => fn())
    .map(num => String.fromCharCode('a'.charCodeAt(0) + Math.floor(num * 26)))
    .join('');
}

export class Cipher {
  constructor(key, letters = 'abcdefghijklmnopqrstuvwxyz') {
    // check and assign key is lowercase using binary etc || create key if one not provided
    if (key !== undefined) {
      if (/\p^{Ll}/.test(key) || key === '') throw new Error('Bad key');
      this.key = key;
    } else {
      this.key = createKey();
    }
    this.alphaMap = letters.split('');
  }

  encode(str) {
    return translate(str, encodeLetter, this.key, this.alphaMap);
  }

  decode(str) {
    return translate(str, decodeLetter, this.key, this.alphaMap);
  }
}