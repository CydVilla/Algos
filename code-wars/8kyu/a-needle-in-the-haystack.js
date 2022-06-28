const findNeedle = (haystack) => {
    for (let i = 0; i < haystack.length; i++){
      if (haystack[i] === 'needle') {
        console.log(i)
        return 'found the needle at position ' + i
  }
  }
  }