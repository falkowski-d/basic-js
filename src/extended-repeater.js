const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let repeatTimes = options.repeatTimes || 0;
  let separator = options.separator || '+';
  let addition = String(options.addition) || '';
  let additionRepeatTimes = options.additionRepeatTimes || 0;
  let additionSeparator = options.additionSeparator || '|';
  let result = '';


  if (repeatTimes === 0 && additionRepeatTimes === 0)
    result += str + addition;
  else {
    for (let i = 0; i < repeatTimes; i++) {
      result += str;
      for (let j = 0; j < additionRepeatTimes; j++) {
        if (j < additionRepeatTimes - 1)
         result += addition + additionSeparator;
         else result += addition;
      }
      if (i < repeatTimes - 1) result += separator;
    }
  }
  return result;

};