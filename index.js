function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (const key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}
function myMap(collection, callback) {
    const result = [];
    myEach(collection, (item) => result.push(callback(item)));
    return result;
}
function myReduce(collection, callback, acc) {
    if (acc === undefined) {
        acc = collection[0];
        collection = collection.slice(1);
    }
    myEach(collection, (item) => acc = callback(acc, item, collection));
    return acc;
}
function myFind(collection, predicate) {
    let result;
    myEach(collection, (item) => {
        if (predicate(item)) {
            result = item;
        }
    });
    return result;
}
function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (item) => {
        if (predicate(item)) {
            result.push(item);
        }
    });
    return result;
}
function mySize(collection) {
    let size = 0;
    myEach(collection, () => size++);
    return size;
}
function myFirst(collection, n) {
    if (n === undefined) {
        return collection[0];
    }
    return collection.slice(0, n);
}
function myLast(collection, n) {
    if (n === undefined) {
        return collection[collection.length - 1];
    }
    return collection.slice(-n);
}
function myKeys(obj) {
    const keys = [];
    myEach(obj, (val, key) => keys.push(key));
    return keys;
}
function myValues(obj) {
    const values = [];
    myEach(obj, (val) => values.push(val));
    return values;
}