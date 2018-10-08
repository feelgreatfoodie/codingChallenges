let n = 10
let s = 'aba'

function repeatedString(s, n) {
  let a = 0
  s.split('').forEach(e => e === 'a' ? a++ : null)
  a = a * Math.floor(n / s.length)

  for(let i = 0; i < n % s.length; i++ ){
    if(s[i] === 'a') a++
  }
  return a
}

console.log('REPEATEDSTRING(S, N)', repeatedString(s, n))
