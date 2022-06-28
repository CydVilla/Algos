const getCount = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    var vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        vowelsCount++
      }
    }
    
    return vowelsCount;
  }