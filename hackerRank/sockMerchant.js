// Complete the sockMerchant function below.
const n = 9
const ar = [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ]

function sockMerchant(n, ar) {
    let sockPairs = 0
    let obj = ar.reduce((acc, cv) => {
        acc[cv] ? acc[cv]++ : acc[cv] = 1
        return acc
    }, {})
    Object.entries(obj).map(e => sockPairs += Math.floor(e[1]/2))
    return sockPairs
}

console.log('SOCKMERCHANT(N,AR)', sockMerchant(n,ar))
