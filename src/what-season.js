const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (Object.prototype.toString.call(date) === "[object Date]") {
      
    let tempDate = new Date(date);
      let getMonth = tempDate.getMonth();
      if (getMonth >=2 && getMonth <=4) {
        return 'spring';
      } else if (getMonth >=5 && getMonth <=7){
        return 'summer';
      } else if (getMonth >=8 && getMonth <=10) {
        return 'fall';
      } else return 'winter';
    
  } else
    // not a date
    if (date === undefined) {
      return 'Unable to determine the time of year!';
    } else throw Error;
}; 