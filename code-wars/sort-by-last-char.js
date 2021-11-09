const last = (x) => {
    const reversedArray = []
      x.split(' ').forEach(element => reversedArray.push(element.split('').reverse().join('')))
      return reversedArray.sort((a, b) => a.charCodeAt(0)-b.charCodeAt(0)).map((element) => element.split('').reverse().join(''))
  }
  
  