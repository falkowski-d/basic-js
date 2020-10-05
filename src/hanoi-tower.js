const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let resultObj = {
    turns: 0,
    seconds: 0
  };
  
  resultObj.turns = Math.pow(2, disksNumber) - 1;
  resultObj.seconds = Math.floor(resultObj.turns * 3600 / turnsSpeed);

  return resultObj;

};
