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
  let maxWorkerResult = -Infinity;

  for (const item of arrOfArr) {
    const result = func(...item);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
