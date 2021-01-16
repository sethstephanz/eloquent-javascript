//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end) {
  let arr = [];
  for (start; start <= end; start++) {
    arr.push(start);
  }
  return arr;
}

range (1, 10); //-->[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

function sum (array) {
  let counter = 0;
  for (let i in array) {
    counter += array[i];
    i++;
  }
  return counter;
}

sum(range(1, 10)); //-->55

//As a bonus assignment, modify your range function to take an optional third argument that indicates the "step" value used when building the array. If no step is
//given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure
//it also works with negative step values os that range(5, 2, -1) produces [5, 4, 3, 2].

function range(start, end, step) {
  let arr = [];
  if (step > 0) {
    while (start <= end) {
      arr.push(start);
      start += step;
    }
  } else {
      while (start >= end) {
      arr.push(start);
      start += step;
    }
  }
  return arr;
}

range(1, 10, 2); //-->[ 1, 3, 5, 7, 9 ]
range(5, 2, -1); //-->[ 5, 4, 3, 2 ]
