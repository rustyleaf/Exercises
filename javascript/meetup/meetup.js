export const meetupDay = (year, month, Day, week) => {
  
  const dates = {
    leapYear: (n) => 0 == n % 4 && !(0 == n % 100) && !(0 == n % 400),
    months: { 0: () => 31, 1: () => (dates.leapYear(year)) ? 29 : 28, 2: () => 31, 3: () => 30, 4: () => 31, 5: () => 30, 6: () => 31, 7: () => 31, 8: () => 30, 9: () => 31, 10: () => 30, 11: () => 31 },
    weeks: { '1st': () => 1, '2nd': () => 8, '3rd': () => 15, '4th': () => 22, '5th': () => 29, 'last': () => dates.months[month]() - 6, 'teenth': () => 13 },
    days: { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 }
  }

  const theDay = Array(7)
    .fill(0)
    .map((_, i) => parseInt(dates.weeks[week]()) + i)
    .filter( y => y <= dates.months[month]())
    .map(x => { 
      let d = new Date(year, month, x, 0, 0, 0);
      return (d.getDay() === dates.days[Day]) ? d : null;
    })
    .filter( x => x !== null);
 
  if ( theDay.length > 0) {
    return theDay.pop();
  } else {
    throw new Error('nonexistant day!');
  }
}