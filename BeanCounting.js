function countBs (string) {
  let counter = 0;
  for (let i in string) {
    if (string[i] == 'B') {
      counter++;
    }
  }
  return counter;
}

countBs('Im thinkin Bout Thos Beans'); //--> 2

////////////////////////

function countChar (string, char) {
  let counter = 0;
  for (let i in string) {
    if (string[i] == char) {
      counter++;
    }
  }
  return counter;
}

countChar('Roll that beautiful bean footage!', 'b'); //--> 4
