export const transform = (old) => {
  const [os, ns] = [Object.entries(old), {}];
  os.map(v => v[1]
    .map(x => x.toLowerCase())
    .map(x => ns[x] = parseInt(v[0])));
  return ns;
};
