const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let team = "";

  if ((typeof members) === 'object' && members !== null && members.length > 0) {

    for (let key of members) {
      if (typeof key === 'string') {
      for (i = 0; i < key.length; i++) {
        if (key[i] !== " ") {
          team += key[i].toUpperCase();
          break;
        }
      }
    }; 
  } 
  return (team.split("").sort()).join('');
  } else return false;


};