//on every year that is evenly divisible by 4
let divBy4 = num => 0 == num % 4

//except every year that is evenly divisible by 100
let divBy100 = num => 0 == num % 100

//unless the year is also evenly divisible by 400
let divBy400 = num => 0 == num % 400

export const isLeap = num => divBy4(num) && !(divBy100(num) && !divBy400(num))

0 == num % 4 && !(0 == num % 100) && !(0 == num % 400)