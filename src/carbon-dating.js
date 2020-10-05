const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if (typeof sampleActivity === 'string') {
  
    if (!Number.isNaN(+sampleActivity) && (+sampleActivity > 0) && (+sampleActivity < 15) ) {
      let t = 1, k = 1;
      k = 0.693 / HALF_LIFE_PERIOD;
      t = Math.log2 (MODERN_ACTIVITY/+sampleActivity) / k;
      return Math.ceil(t);
  
    } else return false;
  } else return false;
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
