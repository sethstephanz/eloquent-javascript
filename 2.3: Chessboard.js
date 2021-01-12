//Note this solution does not use \n as stipulated in the prompt but instead logs each line on its own.

function myFunction (n, m) {
  let spaceBefore = ' #'.repeat(m);
  let spaceAfter = '# '.repeat(m);
  let i = 0;
  while (i < n) {
    if (i < n){
      console.log(spaceBefore);
      i++;
    }
    if (i < n) {
      console.log(spaceAfter);
      i++;
    }
  }
}

//Sample input: myFunction(8, 4)
//Expected output: 
//   # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
