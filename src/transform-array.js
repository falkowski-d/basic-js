const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
/*   const doubleNext = '--double-next',
        doublePrev = '--double-prev',
        deleteNext = '--discard-next',
        deletePrev = '--discard-prev';


        if (!Array.isArray(arr)) { throw new Error('Error');}
        let resArr = [];
        
        for (let i = 0; i < arr.length; i++) {
          switch (arr[i]) {
            
            case doubleNext:
            if(i  < arr.length - 1)  resArr.push(arr[i + 1]); 
            break;
      
            case doublePrev:
            if(i >= 1 && arr[i - 2] !== deleteNext){
              resArr.push(arr[i - 1]);
            }
            break;
      
            case deleteNext:
            i++;
            break;
      
            case deletePrev:
            if(i >= 1 && arr[i - 2] !== deleteNext){
              resArr.splice(resArr.length - 1 , 1);
            }
            break;
      
            default:
            resArr.push(arr[i]);
          }
        }
        return resArr; */

        if (!Array.isArray(arr)) {
          throw new Error('Not array');
        }
      
        let result = arr.slice();
      
        for (let i = 0; i < result.length; i++) {
          if (result[i] == '--discard-next') {
            result[i] = undefined;
            result[i + 1] = undefined;
            i += 1;
          } else if (result[i] == '--discard-prev') {
            result[i] = undefined;
            result[i - 1] = undefined;
          } else if (result[i] == '--double-next') {
            result[i] = result[i + 1];
          } else if (result[i] == '--double-prev') {
            result[i] = result[i - 1];
          } 
        }
      
          return result.filter(item => item != undefined);
      
      
};