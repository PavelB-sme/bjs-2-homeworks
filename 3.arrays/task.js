function compareArrays(arr1, arr2) {
  const check = arr1.length === arr2.length && arr1.every((elem, index) => elem === arr2[index]);

  return check;
}

function getUsersNamesInAgeRange(users, gender) {
  return users.
  filter(user => user.gender === gender).
  map(user => user.age).
  reduce((average, userAge, index, array) => average + userAge / array.length, 0);
}