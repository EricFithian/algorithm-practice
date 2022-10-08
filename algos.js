// Learning big O notation

// Has to do with how fast an algorithm runs

// Keep track of 2 things - Best and worst case
// How many times do you iterate through something

function prime(num) {
    // A prime number is only divisible by 1 or itself
    if(num % 1 !== 0) return false;
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(factor(i, num)) return false;
    }
    return true;
}

console.log(prime(1000000))
// If we use i < num, we have 999,998 iterations
// using Math.sqrt(num) we only have 999 iterations

// Is the first number a factor of the second number
function factor(num1, num2) {
    if(num2 % num1 === 0) return true;
    return false;
}

function largestPrimeFactor(num) {
    // Identify which numbers from 2 up until, and including, the number
    // are prime and are factors of the number
    if(prime(num)) return num;
    let factors = [];
    for(let i = 2; i <= Math.sqrt(num); i++) {
        // One of loops is O(log(n)) and another is 
        if(factor(i, num) && prime(i)) factors.push(i);
    }
    return factors.length ? factors[factors.length - 1] : "There are none"
}

console.log(largestPrimeFactor(1000000))
// 999 iterations * 35 iterations
// 1000000 * 10000000

console.log(largestPrimeFactor(10)) //return 5
console.log(largestPrimeFactor(11)) //return 11
console.log(largestPrimeFactor(12)) //return 3
console.log(largestPrimeFactor(13195)) //return 29
console.log(largestPrimeFactor(600851475143)) //return 

// console.log(prime(13)) //true
// console.log(prime(5)) //true
// console.log(prime(22)) //false
// console.log(prime(7)) //true
// console.log(prime(1000000003)) //???
// console.log(prime(21929)) //true

// What is the big O notation of this code?

// O(1) - Looking something up, not iterating over a list at any time
// O(n) - Iterating through an entire array
// O(log(n)) - Iterating through part of an array

// function sortSortedArrays(arr1, arr2) {
//     let sortedCombo = [];
//     while(arr1.length && arr2.length) {
//         if(arr1[0] > arr2[0]) {
//             sortedCombo.push(arr2[0])
//             arr2.shift()
//         }
//     }
// }

function doubleAll(arr) {
    let doubled = [];
    arr.forEach(num => {
        doubled.push(num * 2);
    });
    // doubled.forEach(num => {
    //     console.log(num)
    // })
    return doubled;
}