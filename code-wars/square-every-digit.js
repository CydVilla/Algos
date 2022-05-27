const squareDigits = (num) => {
    let convert = num.toString().split('')
    let numbersSquared = convert.map(Number).map(e => e ** 2)
    return Number(numbersSquared.join(''))
  }

  // 7kyu - This algo took a bit more thinking than the average 8kyu
  // First I took the input (num) which is a four digit number and converted it into a string
  // since the output expected is 'squared digits' aka numbers that have been squared but
  // concatenated to form a single number composted of the indiviual squared digits
  // given this information I used the split method to isolate the digits
  // once isolated with split I used the map method, passing it the Number method to change
  // the isolated to strings to now isolated numbers, afterwards chaining another map, using the ES6 shorthand
  // of multiplying to the second power, although I realize e * e would've worked just the same
  // since the numbers are still isolated I used the join array method to convert them into a single unique amount wrapping it
  // with the Number method to ensure the output is a number and not a string