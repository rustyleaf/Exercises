// export class Allergies {
//   constructor(num) {
//     this.num = num;
//     this.score = { 1: 'eggs', 2: 'peanuts', 4: 'shellfish', 8: 'strawberries', 16: 'tomatoes', 32: 'chocolate', 64: 'pollen', 128: 'cats' };
//     this.keys = Object.keys(this.score).sort((a, b) => b - a);
//   }

//   list() {
//     return this.checkList(this.num).reverse();
//   }

//   allergicTo(food) {
//     return (this.list().length > 0 ) ? !(food in this.list()) : false;
//   }

//   checkList(number) {
//     let i = -1;
//     const arr = [];
//     const checkNext = (num) => {
//       i += 1;
//       const key = this.keys[i];
//       const mod = num % key;
//       if (mod !== num) arr.push(this.score[key]);
//       return (mod === 0) ? arr : checkNext(mod);
//     };
//     return (number === 0) ? [] : checkNext(number);
//   }
// }
