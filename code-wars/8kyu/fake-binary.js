const fakeBin = (x) => {
    let result = ''
    for(let i in x) {
    if (x[i] < '5') 
      result += '0'
    else if  (x[i] >= '5'){
      result += '1'
    }
  }
      return result
  }