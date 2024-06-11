function datediff(first: number, second: number) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}

function parseDate(date: string) {
  const mdy = date.split('/');
  return +new Date(+mdy[2], +mdy[0] - 1, +mdy[1]);
}

export function compareDates(firstDate: string, secondDate: string) {
  return datediff(parseDate(secondDate), parseDate(firstDate));
}
