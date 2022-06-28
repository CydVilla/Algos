const check = (a, x) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === x) {
        console.log(a[i], x)
        return true
  } 
    }
    return false
  }

  // only works when return false it out of the loop


  
//Solution with method
// const check = (a,x) => a.includes(x)