//Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.

arrayToList = array => {
  let list = {};
  for (let i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list
    }
  }
  return list;
}

arrayToList([1, 2, 3]) //--> { value: 1, rest: { value: 2, rest: { value: 3, rest: {} } } }

//Also write a listToArray function that produces an array from a list. 

let list = {1: 'A', 2: 'B', 3: 'C'};

listToArray = list => {
  let arr = [];
  for (let i in list) {
    arr.push(`${i}: ${list[i]}`);
  }
  return arr;
}

listToArray(list); //--> [ '1: A', '2: B', '3: C' ]

//Then add a helper function, prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, 

let newList = {
  1: 'B', 
  2: 'C', 
  3: 'D'};

let element = 'A';

prepend = list => {
  let newObj = {};
  newObj[1] = element;
  for (let i in list) {
    i++;
    newObj[i] = list[i];
  }

  return newObj;
}

prepend(newList);

//and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element)
//or undefined when there is no such element. 



//If you haven't already, also write a recursive version of nth.
