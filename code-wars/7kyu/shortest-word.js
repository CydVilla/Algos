// Shortest-word

const findShort = (s) => {
    let strSplit = s.split(' ')
    let shortestStrLength = strSplit[0].length
    for (let i=0; i < strSplit.length; i++) {
       if (shortestStrLength > strSplit[i].length) {
        shortestStrLength = strSplit[i].length
       }
    }
    return shortestStrLength
  }


// const findShort = (s) => s.split(' ').reduce((a, b) => {
//   return b.length < a.length ? b : a
// }).length


console.log(findShort("bitcoin take over the world maybe who knows perhaps"));