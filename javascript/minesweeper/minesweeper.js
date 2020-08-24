'use strict'

// (str.match(/\n/g) || '').length;

const rows = (arr) => arr.length;
const cols = (arr) => arr[0].length;

console.log(rows([
    '***',
    '***',
    '***',
  ]), cols([
    '***',
    '***',
    '***',
  ]));

const scan = (arr, mine='*') => {
    return arr
        .map( (row, idx) => row.split('')
            .reduce( (m, el, i) => {
                let coords = `R${idx}C${i}`;
                m[`${coords}`] = el;
                //m = (el === mine) ? m[i] : {};
                return m;                
            }, {})
        );
}
    

console.log(scan([
    '***',
    '***',
    '***',
  ]));
