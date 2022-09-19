function narcissistic(value) {
    let arr = value.toString().split("");
     let arrLength = arr.length;
     let exponent = (x) => {return Math.pow(x,arrLength);};
     let sum = (acc, val) => {return acc + val;};
   
     let result = arr.map(exponent).reduce(sum); 
     if (result === value) {
       return true;
       } else {
       return false;
       };
   }