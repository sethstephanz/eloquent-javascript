function isEven(N) {
  if (N == 0) {
    return true;
  } else if (N == 1) {
    return false;
  } else {
    isEven(N - 2);
  }
}

isEven(50); //expected output: true
isEven(75); //expected output: false

//Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
//One way to fix the function is to add some additional else if statements to test if the number, 
//after failing the first two statements, is greater or less than 0. If N is less than 0, then call
//isEven on N + 2 instead of N - 1.

function isEven(N) {
  if (N == 0) {
    return true;
  } else if (N == 1) {
    return false;
  } else if (N > 0) {
    isEven(N - 2);
  } else {
    isEven(N + 2);
  }
}

isEven(50); //expected output: true
isEven(75); //expected output: false
isEven(-1); //expected output: false
isEven(-884); //expected output: true
