//export const NucleotideCounts = {}

// const base = new Map([
//   ['error', /[^ACGT]/g],
//   ['adenine', /A{1}/g],
//   ['cytosine', /C{1}/g],
//   ['guanine', /G{1}/g],
//   ['thymine', /T{1}/g]
// ]);

// NucleotideCounts.parse = (str = '') => {
//   const arr = [];
//   for (let a of base.values()) {
//     arr.push((str.match(a) || []).length);
//   }
//   if (arr[0] > 0) throw new Error('Invalid nucleotide in strand');
//   return arr.slice(1).join(' ');
// };

export class NucleotideCounts {
  static parse(strand) {
      if (strand.match(/[^ACGT]/)) throw new Error('Invalid nucleotide in strand');
      var nCounts = {A: 0, C: 0, G: 0, T: 0};
      strand.split('').map(n => nCounts[n]++); 
      return Object.keys(nCounts).map(key => `${nCounts[key]}`).join(' ') ;
  }
};