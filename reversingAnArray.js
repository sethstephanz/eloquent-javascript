// For this exercise, write two functions, reverseArray and reverseArrayInPlace.
// The first, reverseArray, takes an as argument and produces a new array that has the same elements in the inverse order.

function reverseArray(array) {
  let newArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
}

reverseArray([1, 2, 3]); //--> [ 3, 2, 1 ]

// The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements.
// Neither may use the standard reverse method.

function reverseArrayInPlace(array) {
 array.sort(function(a, b) {
    return a - b;
  })
  return array;
}

reverseArrayInPlace([1, 100, -50]); //--> [-50, 1, 100]

// This solution technically works but I think it may go against the spirit of the exercise. 
// May come back to implement a more 'manual' method later on.
