const disemvowel = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', "E", 'I', 'O', 'U']
    for (let i of vowels) {
      str = str.split(i).join('')
    }
    return str
  }