//  Convert a string to an array

const stringToArray = (string) => {
    let stringSplit = []
    let storedStr = ''
    for (let i = 0; i < string.length; i++){
      if (' ' === string[i]) {
        stringSplit.push(storedStr)
        storedStr = ''
  } else if (i === string.length-1){
    storedStr += string[i]
    stringSplit.push(storedStr)
  }
      else {
    storedStr += string[i]
  }   
    }
    return stringSplit
  }