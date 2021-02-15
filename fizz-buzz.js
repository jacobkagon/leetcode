//Write a program that outputs the string representation of numbers from 1 to n.
//But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

const fizzBuzz = function (n) {
  let arr = [];
  let num;
  for (let i = 1; i <= n; i++) {
    num = i;
    if (i % 3 === 0 && i % 5 === 0) {
      num = "FizzBuzz";
    } else if (i % 5 === 0) {
      num = "Buzz";
    } else if (i % 3 === 0) {
      num = "Fizz";
    } else {
      num = i.toString();
    }
    arr.push(num);
  }
  return arr;
};
