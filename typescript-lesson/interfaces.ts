interface ICat {
	readonly age: number,
	name: string,
	sayMeow: () => void
};

const meow: ICat = {
	age: 2,
	name: 'Murka',
	sayMeow() {
		console.log('Meow Meow...');
	}
};

const meow3 = {} as ICat;
const meow4 = <ICat>{};

//======
interface ICitty extends ICat {
	getAge: () => number
}

const meow5: ICitty = {
	age: 2,
	name: 'Murka',
	sayMeow() {
		console.log('Meow Meow...');
	},
	getAge() {
		return this.age;
	}
}

//==========
interface IClock {
	time: Date,
	setTime(date: Date): void
}

class Clock implements IClock {
	time: Date = new Date();
	setTime(date: Date) {
		this.time = date;
	}
}
// ===========
interface Styles {
  [key: string]: string
}

const css: Styles = {
	border: '1px solid black',
	marginTop: '2px',
	borderRadius: '5px'
}

interface Box {
  h: number,
  w: number
}

interface Box {
  s: string
}

const box: Box = {
  h: 1,
  w: 1,
  s: '1'
}

function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
  return propertyNames.map((n) => o[n]);
}

interface Car {
  manufacturer: string;
  model: string;
  year: number;
}

let taxi: Car = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2014,
};

const Audi: Readonly<Car> = {
  manufacturer: "Toyota",
  model: "Camry",
  year: 2013
}

// Manufacturer and model are both of type string,
// so we can pluck them both into a typed string array

// If we try to pluck model and year, we get an
// array of a union type: (string | number)[]
let modelYear = pluck(taxi, ["model", "year"]);

let makeAndModel: (string | number)[] = pluck<typeof taxi, keyof typeof taxi>(taxi, ["manufacturer", "model"]);

