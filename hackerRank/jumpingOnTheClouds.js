let n = 7
let c =[ 0, 0, 1, 0, 0, 1, 0 ]

function jumpingOnClouds(c) {
  let jumps = 0
  //assuming c[0] === 0 always, & never have 1 following 1 in c, since game is winnable
  //traverse array c: if element of index +2 from current is 0, then make that element current and jumps++
  //otherwise verify element of index +1 is o, make that element current and jumps++
  for(let curr=0; curr < c.length-1; jumps++){
    c[curr+2] === 0 ? curr +=2 : curr++
    console.log('curr', curr, 'jumps', jumps)
  }

  return jumps
}


function jumpingOnClouds2(c) {
  let jumps = 0
  let curr = 0
  //assuming c[0] === 0 always, & never have 1 following 1 in c, since game is winnable
  //traverse array c: if element of index +2 from current is 0, then make that element current and jumps++
  //otherwise verify element of index +1 is o, make that element current and jumps++
  while(curr < c.length-1){
    c[curr+2] === 0 ? curr +=2 : curr++
    jumps++
    console.log('curr', curr, 'jumps', jumps)
  }

  return jumps
}

console.log('JUMPINGONCLOUDS(C)', jumpingOnClouds(c))
console.log('JUMPINGONCLOUDS2(C)', jumpingOnClouds2(c))
