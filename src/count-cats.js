const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for (let key of matrix){
    for (let key2 of key){
      if (key2 ==="^^") {
        count += 1;
     }
   }
  }
  return count;
};
