export const validate = (num) => {
    let sum = num.toString()
        .split('')        
        .reduce((s, x, i, arr) => s + Math.pow(x, arr.length), 0)
    return sum == num;
}