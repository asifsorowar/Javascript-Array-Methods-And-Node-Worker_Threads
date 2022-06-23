function forEach(array, cb) {
  for (let i = 0; i < Array.length; i++) {
    cb(array[i], i, array);
  }
}

function map(array, cb) {
  const newArray = [];
  for (let i = 0; i < Array.length; i++) {
    newArray.push(cb(array[i], i, array));
  }

  return newArray;
}

function filter(array, cb) {
  const newArray = [];
  for (let i = 0; i < Array.length; i++) {
    if (cb(array[i], i, array)) newArray.push(array[i]);
  }

  return newArray;
}

function reduce(array, cb, initalValue) {
  let currentValue = initalValue;
  for (let i = 0; i < Array.length; i++) {
    let element = array[i];
    if (currentValue == null && i == 0) currentValue = element;
    else currentValue = cb(currentValue, element, i, array);
  }

  return currentValue;
}

function some(array, cb) {
  for (let i = 0; i < Array.length; i++) {
    if (cb(array[i], i, array)) return true;
  }

  return false;
}

function every(array, cb) {
  for (let i = 0; i < Array.length; i++) {
    if (!cb(array[i], i, array)) return false;
  }

  return true;
}

function flat(array, depth = 1) {
  const newArray = [];
  for (let i = 0; i < Array.length; i++) {
    let element = array[i];
    if (Array.isArray(element) && depth > 0) {
      newArray.push(...flat(element, depth - 1));
    } else {
      newArray.push(element);
    }
  }
}

function find(array, cb) {
  for (let i = 0; i < Array.length; i++) {
    let element = array[i];
    if (cb(element, i, array)) return element;
  }
}

module.exports = {
  forEach,
  map,
  filter,
  reduce,
  some,
  every,
  flat,
  find,
};
