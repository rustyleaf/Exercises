export const compute = (str1='', str2='') => {
  if (str1.length !== str2.length) throw new Error('left and right strands must be of equal length');
  const [arr1, arr2] = [[...str1], [...str2]];
  const count = arr1.filter((x, i) => {
    return x !== arr2[i]
  }).length;
  return (count > 0) ? count : 0;  
}