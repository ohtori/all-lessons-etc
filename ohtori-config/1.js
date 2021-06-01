const head = arr => arr[0];
const merge = (a) => (b) => [...a, ...b];
const sizeOf = arr => arr.length;
const tail = arr => arr.slice(1);

const map = (arr) => (func) => (acc) => {
  return sizeOf(arr) === 0 ? acc
    : map(tail(arr))(func)(
      merge(acc)(func(head(arr)))
    )
}
const time = process.hrtime.bigint();
for (let i = 0; i < 1000000; i++) {
  const arr = [1,2,3,4]
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
  }
}
console.log((process.hrtime.bigint() - time) / 10000000n);











