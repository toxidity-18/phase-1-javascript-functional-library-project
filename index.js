
function arraysEqual(arrA, arrB) {
    if (arrA.length !== arrB.length) return false;
    for (let idx = 0; idx < arrA.length; idx++) {
      if (Array.isArray(arrA[idx]) && Array.isArray(arrB[idx])) {
        if (!arraysEqual(arrA[idx], arrB[idx])) return false;
      } else if (arrA[idx] !== arrB[idx]) {
        return false;
      }
    }
    return true;
  }
  
  function objectsEqual(objA, objB) {
    return JSON.stringify(objA) === JSON.stringify(objB);
  }
  

  function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
  

  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        result.push(callback(collection[key], key, collection));
      }
    }
    return result;
  }
  
  
  function myReduce(collection, callback, acc) {
    let start = 0;
    if (acc === undefined) {
      acc = collection[0];
      start = 1;
    }
    for (let i = start; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
    return acc;
  }
  
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) return collection[i];
    }
    return undefined;
  }

  function myFilter(collection, predicate) {
    let result = [];
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) result.push(collection[i]);
    }
    return result;
  }
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }

  function myFirst(collection, n) {
    if (n === undefined) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  }
  

  function myLast(collection, n) {
    if (n === undefined) {
      return collection[collection.length - 1];
    } else {
      return collection.slice(-n);
    }
  }
  

  function myKeys(object) {
    return Object.keys(object);
  }
  
   function myValues(object) {
    return Object.values(object);
  }
  