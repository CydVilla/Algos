//  Logic Drills: Traffic light
// JavaScript:


const updateLight = (current) => {
  console.log(current)
  if (current === 'green') {
    return 'yellow'
} else if (current === 'yellow') {
  return 'red'
} else {
  return 'green'
}
}
