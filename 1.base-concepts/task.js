'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  }

  return arr;
}

console.log(solveEquation(1, 5, 4));

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  let bodyAmount = amount - contribution;
  let payment = bodyAmount * (percent + percent / ((1 + percent) ** countMonths - 1));
  let totalMortgage = payment * countMonths;

  return +totalMortgage.toFixed(2);
}

console.log(calculateTotalMortgage(15, 0, '15000', 36));