function triangle(n) {
  let i = 1;
  while (i <= n) {
    console.log('#'.repeat(i));
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
