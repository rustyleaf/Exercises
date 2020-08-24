module.exports.at = (h = 0, m = 0) => {

  // convert to Datetimeusing mins
  const minsToDate = (m) => new Date(0, 0, 0, 0, m);

  //setup string-formatting
  const pad = (n, p) => ('0' + n).slice(-p);
  const strTime = (t) => `${pad(t.getUTCHours(), 2)}:${pad(t.getUTCMinutes(), 2)}`;

  //convert
  const cvt = (n = 0) => {
    m = h * 60 + m + n;
    return strTime(minsToDate(m));
  }

  //output as obj
  return {
    toString: cvt,
    plus: (n) => cvt(n),
    minus: (n) => cvt(-n),
    minus: (n) => cvt(-n),
    equals: (n) => n.toString() === cvt()
  };
}
