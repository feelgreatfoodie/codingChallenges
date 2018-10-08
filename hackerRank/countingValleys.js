
const n = 8
const s = 'UDDDUDUU'

function countingValleys(n, s) {
  //starting position of sea level is 0
  //any time current position reaches 0 from -n, increment valley countingValleys
  //disregard mountains
  let position = 0
  let valleys = 0

  s.split('').map(e => {
    if(e === 'D') --position
    else {
      ++position
      if (position === 0) valleys++
    }
  })

  return valleys
}


console.log('COUNTINGVALLEYS(N, S)', countingValleys(n, s))
