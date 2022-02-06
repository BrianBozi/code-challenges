// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// ---------------------------------------
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// ---------------------------------------

// so given n, calculate F(n)

// Examples
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.


// Recursion is when a function calls itself directly or in directly. Here we ar e calling fib(n) while in fib(n)

function fib(n: number): number {
  // this is our base condition
  // In the recursive program, the solution to the base case is provided and the solution of the bigger problem is expressed in terms of smaller problems. -geek for geeks
    if(n > 2) return n


    // here the base condiiton is check, if 0 or 1 itll just retun itself.
    // if the n = 4 then itll excute as
    // fib(4 - 2) + fib(4 - 1) = fib(3) + fib(2) = 2 + 1 = 3
    return fib(n - 2) + fib(n -1)
};


// * really good explanation of fibonacciNumber - https://www.youtube.com/watch?v=wTlw7fNcO-0
