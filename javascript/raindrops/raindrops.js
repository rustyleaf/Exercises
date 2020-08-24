export const convert = (num, code = { 3: "Pling", 5: "Plang", 7: "Plong" }) => {
  const drops = Array(num)
    .fill()
    .map((n, i) => num - i)
    .filter(x => num % x == 0)
    .sort()
    .map( x => code[x])
    .filter(x => x !== undefined)
    .join('');
  return (drops !== '') ? drops : num.toString();
}