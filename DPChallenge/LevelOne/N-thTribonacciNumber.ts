// The Tribonacci sequence Tn is defined as follows:

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

// Examples
// ---------------------
// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// --------------------------

// Input: n = 25
// Output: 1389537

// -------------------


function tribonacci(n: number): number {
    let arr = [0, 1, 1, 2];
        if (n <= 3) {
    return arr[n];
  } else {
    for (let i = 3; i < n; i++) {
      arr.push(arr[i] + arr[i - 1] + arr[i - 2]);
    }
  }
  return arr[arr.length - 1];

};
