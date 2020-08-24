function Converter (seq, from, to) {
    this.seq = seq;
    this.from = from;
    this.to = to;   
}
//return the highest Exp in the Sequence Bases
let highestExp = (num, base, e = 0,) => {    
        if ((num < Math.pow(base, e))) return e-1      
        return highestExp(num, base, e+1)
    }

//return the remainder for the next iteration
let nxtNum = (num, base, e) => num - Math.pow(base, e)

//return an array of base powers from number
let getPowers = (num, pow, o = []) => {       
    if ((!num || !pow) || (num < 1)) return o
    o.push(highestExp(num, pow, 0));
    getPowers(nxtNum(num, pow, o[o.length-1]), pow, o)
    return o;
}

//return an array of bases
let getBaseSeq = (n, arr = []) => {    
    arr.push(n)
    if (n < 1) return arr
    return getBaseSeq(n-1, arr)    
}

// decodes the base sequence to decimal
let getNum = (num, from) => {
    return num
        .reduce((acc, num, i, arr) => {                  
            return acc + num * Math.pow(from, arr.length - i - 1)            
    }, 0)
}

Converter.prototype.convert = function (seq, from, to) { 
    //validation   
    if (seq.length > 1 && seq[0] == 0) throw new Error('Input has wrong format');
    if (from < 2 || !Number.isInteger(from)) throw new Error('Wrong input base');
    if (to < 2 || !Number.isInteger(to)) throw new Error('Wrong output base');
    if (seq.length == 0 || !seq.every(x => x>= 0 && x < from)) throw new Error('Input has wrong format');
    if (seq[0] == 0 && seq.length == 1) return [0]; 
    
    //convert
    let num = getNum(seq, from);
    let toPowerArr = getPowers(num, to);
    let baseSeq = getBaseSeq(toPowerArr[0]);
    return baseSeq.map(x => (toPowerArr.filter(y => y == x )).length);
}
module.exports = Converter;
