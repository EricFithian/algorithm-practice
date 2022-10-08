// Learning big O notation

// Has to do with how fast an algorithm runs

// Keep track of 2 things - Best and worst case
// How many times do you iterate through something

function prime(num) {
    // A prime number is only divisible by 1 or itself
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(factor(i, num)) return false;
    }
    return true;
}

// Is the first number a factor of the second number
function factor(num1, num2) {
    if(num2 % num1 === 0) return true;
    return false;
}

function largestPrimeFactor(num) {
    // Identify which numbers from 2 up until, and including, the number
    // are prime and are factors of the number
    
}

console.log(prime(13)) //true
console.log(prime(5)) //true
console.log(prime(22)) //false
console.log(prime(7)) //true
console.log(prime(1000000003)) //???
console.log(prime(21929)) //true

// What is the big O notation of this code?

// O(1) - Looking something up, not iterating over a list at any time
// O(n) - Iterating through an entire array
// O(log(n)) - Iterating through part of an array
