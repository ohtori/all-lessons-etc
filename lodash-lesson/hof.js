const _ = require('lodash');

function multiple(a, b) {
  return a * b;
}

function devide(a, b) {
  return a / b;
}

// function double(num) {
//   return multiple(num, 2);
// }

// function partial(func, ...fixed) {
//   return function(...args) {
//     return func.apply(this, fixed.concat(args));
//   }
// }

// function partial(func) {
//   const fixed = _.tail(_.toArray(arguments))
//   return function() {
//     return func.apply(this, _.concat(fixed, arguments));
//   }
// }

// const double = _.partial(multiple, 2);
// console.log(double(99));

// // const half = _.partialRight(devide, 2);
// const half = _.partial(devide, _, 2);
// console.log(half(4));

//Curry
// const curriedDevide = _.curry(devide);
// console.log(curriedDevide(10, 2));
// console.log(curriedDevide(10)(2));

//Flow
const notFlatArray = [1,2,3, [4,5]];
console.log(_.sum(notFlatArray));

const sumFlat = _.flow([_.concat, _.flattenDeep, _.sum]);

console.log(sumFlat(notFlatArray));


