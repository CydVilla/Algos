function solution(str){
    let answer = ''
  //   return str.split('').reverse().join()
  for (let i = str.length-1; i >= 0; i--) {
    answer += str[i]
  }
    return answer
  }

//   const solution = (str) => {
//     return str.split('').reverse().join('')
//   }