// const ArrayOfNumbers: Array<number> = [1,2,3,6,4,5];
// const ArrayOfStrings: Array<string> = ['1','2','3'];

// function reverse<T>(arr: T[]): T[] {
// 	return arr.reverse();
// }

// console.log(reverse(ArrayOfNumbers));
// console.log(reverse(ArrayOfStrings));

// interface GenericIdentityFn<T> {
//   (arg: T): T
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// let _identity: GenericIdentityFn<string> = identity;

class GenericClass<T> {
  name: T

  makeSex: (name: T) => T
}

const genericObject = new GenericClass<string>();
genericObject.name = 'Ilia';
genericObject.makeSex = function(name) {
  return `${name} & ${this.name} have sex`;
}

console.log(genericObject.makeSex('Katerina'));