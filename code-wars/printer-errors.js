const printerError = (s) => {
    let count = 0
      let good = ['a', 'b', 'c', 'd', 'e', 'f', 'g' , 'h', 'i', 'j' , 'k', 'l', 'm']
      for (let i = 0; i < s.length; i++) {
        if (!good.includes(s[i])) {
        count++
        }
        }
        return count +'/'+ s.length
  }
  