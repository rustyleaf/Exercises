
let makeboard = (rows, columns) => {

}
const getLetter = n => String.fromCharCode(97 + n)

const colIndex = n => Array.from(Array(n), (_, x) => x + 1)
const rowIndex = n => Array.from(Array(n), (_, x) => getLetter(x).toUpperCase())

let board = rowIndex(5).reduce((o, x, i, arr) => {
    o[x] = o[x] || [];
    o[x] = Array.from(Array(arr.length).keys(), n => n + 1)
    return o
}, {})

const input = [
    '  *  ',
    '  *  ',
    '*****',
    '  *  ',
    '  *  ',
  ];

  const firstRow = arr => arr[0] === 0
  const lastRow = arr => arr[0] === 0
  const firstCol = arr => arr[0] === 0
  const lastCol = arr => arr[0] === 0


let translate = (arr) => {
    return arr
        .reduce((o, x, i, arr) => {
            o[i] = o[i] || [];            
            o[i] = x.split('')
                //init                
                .map((x) => {
                    return (x !== '*') ? 0 : x
                })
                // add horizontal values
                .map((x, i, arr) => {         
                    o.h[i] = o.h[i] || arr;                        
                    if (x == '*') {
                        if (i == 0) {
                        o.h[i][i+1] = arr[i+1] + 1 
                        }
                        if (i == arr.length-1) {
                            o.h[i][i-1] = arr[i-1] + 1
                        }
                        else {                            
                            o.h[i][i-1] = arr[i-1] + 1 
                            o.h[i][i+1] = arr[i+1] + 1                      
                        }
                    }
                    return o.h
                })
            return o
        } ,{})        
}

//translate(input)

console.log(translate(input))
