'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    return arr;
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}

console.log(solveEquation(1, 5, 4));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  let bodyAmount = amount - contribution;
  let payment =
    bodyAmount * (percent + percent / ((1 + percent) ** countMonths - 1));
  let totalMortgage = payment * countMonths;
  if (typeof totalMortgage === 'number' && !isNaN(totalMortgage)) {
    return +totalMortgage.toFixed(2);
  } else {
    return false;
  }
}

console.log(calculateTotalMortgage(15, 0, 10000, 36));