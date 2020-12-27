function triangle(n) {
  let phrase = "#";
  let i = 1;
  while (i <= n) {
    console.log(phrase.repeat(i));
    i++;
  }
}

triangle(7);

//sample input: 7
//expected output:
// #
// ##
// ###
// ####
// #####
// ######
// #######
