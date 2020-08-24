export const toRna = (str = '') => {
  const transpose = (c) => {    
    const t = { G: 'C', C: 'G', T: 'A', A: 'U' };
    if (!(c in t) || c === '') {
      throw new Error('Invalid input DNA.');
    }
    return t[c];
  }
  return str
    .split('')
    .map(transpose)
    .join('')
}