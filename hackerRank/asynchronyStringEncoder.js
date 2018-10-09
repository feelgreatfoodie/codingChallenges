// In this exercise you will build a rudimentary string encoder with the following rules:
//
// vowels are replaced with number: a -> 1, e -> 2, i -> 3, o -> 4, and u -> 5
// consonants are replaced with previous letter: b -> a, c -> b, d -> c, etc.
// y is replaced with space
// space is replaced with y
// numbers are replaced with their reverse: 1 -> 1, 23 -> 32, 1234 -> 4321
// other characters remain unchanged (punctuation, etc.)
// all output should be lower case, regardless of input case ("Hello World" should produce the same result as "hello world")

let s1 = `1234567890bcdfghjklmnpqrstvwxyzaeiou`
let expected = `0987654321abcefgijklmopqrsuvw y12345`

function encode(stringToEncode) {

  const arr = []  //answer array
    const vowels = `aeiou`
    const nums = `0123456789`

    const str = stringToEncode.toLowerCase()
    let alphabet = new Array(26).fill(1).map((_, i) => String.fromCharCode(97 + i))
    alphabet = alphabet.join(``)

    //function to determine if character is number, flip all numbers
    const flipNums = string => {
      const reversedNums = [] //answer array

      //stop after encountering non-number
      for(let i = 0; i < string.length; i++){
        if(parseInt(string[i]) || string[i] === `0`) {
          reversedNums.unshift(string[i])
        } else break
      }
      return reversedNums
    }

    //iterate over entire string in order to encode it
    for(let i = 0; i < str.length; i++){
      //if character is vowel, replace with appropriate number
      if(vowels.includes(str[i])){
        arr.push(vowels.indexOf(str[i])+1)
      }
      //if character is a number, get all subsequent attached numbers and call function to flip it
      else if(nums.includes(str[i]) && !nums.includes(str[i-1])){
        arr.push(...flipNums(str.slice(i)))
      }
      //if character is not a letter or number, add it to result
      else if(!alphabet.includes(str[i]) && !nums.includes(str[i])){
        str[i] === ` ` ? arr.push(`y`) : arr.push(str[i])
      }
      else if(str[i] === `y`) {
          arr.push(` `)
      }else {
        const currCharIndex = alphabet.indexOf(str[i])
          arr.push(alphabet[currCharIndex-1])
      }
    }
    return arr.join(``)
}

console.log('ENCODE(S1)', encode(s1))
console.log('expected::', expected)
