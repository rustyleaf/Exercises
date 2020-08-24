//'use strict'
const H = require('highland');

let convertCodon = function (codon, MAP = {AUG: "Methionine", UUU: "Phenylalanine", UUC: "Phenylalanine", UUA: "Leucine", UUG: "Leucine", UCU: "Serine", UCC: "Serine", UCA: "Serine", UCG: "Serine", UAU: "Tyrosine", UAC: "Tyrosine", UGU: "Cysteine", UGC: "Cysteine", UGG: "Tryptophan", UAA: "STOP", UAG: "STOP", UGA: "STOP"}) {
    return MAP[codon];
}

let translate = (str = '') => {     
    let arr = [];
    if (str == '') return arr;
    H(str.split(''))
        .batch(3)    
        .map(x => convertCodon(x.join('')))
        .splitBy('STOP')
        .take(1)
        .splitBy(/([A-Z][a-z]+)/g)
        .reject(x => !x)
        .each(x => arr.push(x));
        return arr;
}

module.exports = translate