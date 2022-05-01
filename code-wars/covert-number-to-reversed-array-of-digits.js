const digitize = (n) => {
    return n.toString().split("").reverse().map(Number);
 }

 // convert number to string, split the number string '', reverse the string, use map method convert back to number