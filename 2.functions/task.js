function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = arr.reduce((a, b) => a + b, 0);

  /*for (let i = 0; i < arr.length; i++) {
      if(arr[i]  > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }

      sum += arr[i];
  }*/

  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg};
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return  arr.reduce((a, b) => a + b, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  return  Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElements = 0;
  let sumOddElements = 0;

for (const item of arr) {
    if (item % 2 === 0) {
      sumEvenElements += item;
    } else {
      sumOddElements += item;
    }
  }

  return sumEvenElements - sumOddElements;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElements = 0;
  let countEvenElements = 0;

  for (const item of arr) {
    if (item % 2 === 0) {
      sumEvenElements += item;
      countEvenElements++;
    }
  }

  return sumEvenElements / countEvenElements;
}

function makeWork (arrOfArr, func) {
  return Math.max(...arrOfArr.map((res) => (func(...res))))
}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker));