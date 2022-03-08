// Character-counter

// const validateWord = (s)  => {
//     let data = {}
//     let targetNumber = 0
//     for (let i = 0; i < s.length; i++) {
//       data[s[i].toLowerCase()] = data[s[i]] ? data[s[i]]+1 : 1
//       if (i == s.length-1) {
//         targetNumber = data[s[i]]
//       }
//     }
//     for (const [key, value] of Object.entries(data)) {
//       if (value != targetNumber) {
//         return false
//   }
//   }
//     return true
//   }


const validateWord = (s)  => {
    let data = {}
    let targetNumber = 0
    for (let i = 0; i < s.length; i++) {
      data[s[i].toLowerCase()] = data[s[i]] ? data[s[i]]+1 : 1
      if (i == s.length-1) {
        targetNumber = data[s[i]]
      }
    }
    for (const [key, value] of Object.entries(data)) {
      if (value != targetNumber) {
        return false
  }
  }
    return true
  }

  // function validateWord(s) {
  //   var freq = {}
  //   s.toLowerCase().split('').forEach(function(s) {
  //     freq[s] ? freq[s]++ : freq[s] = 1
  //   })
  
  //   return new Set(Object.values(freq)).size == 1
  // }


//   function validateWord(s, c = s.toLowerCase())
// {
//   return c.length % new Set(c).size == 0
// }



// const validateWord = $ => {
//   $ = [...$.toLowerCase()].reduce((acc, el)=>{
//     acc[el] = acc[el] + 1 || 1;
//     return acc
//   }, {})
//  return [...new Set(Object.values($))].length === 1
// }


// function validateWord(s){
//   const rep = new Set(s.toLowerCase()).size;

//   return s.length % rep ? false : true;
// }


// function validateWord(s){
//   let str = s.toLowerCase().split('');
  
//   let arr = [];
//   let count = 0;
//   for (let i = 0; i < str.length; i++){
//     count = str.filter(el => el == str[i])
//     arr.push(count.length)
    
//   }
// return arr.every(el => el == arr[0])
// }
