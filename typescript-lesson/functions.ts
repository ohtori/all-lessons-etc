function add(a: number, b: number): number {
	return a + b;
}

function toUppercase(str: string): string {
	return str.trim().toUpperCase();
}

interface MyPosition {
	x: number | undefined,
	y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
  default: string
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
	if (!a && !b) {
		return {x: undefined, y: undefined};
	}
	else if (a && !b) {
		return {x: a, y: undefined, default: a.toString()};
	}
	return {x: a, y: b};
}

console.log('Empty', position());
console.log('Empty', position(42));
console.log('Two params', position(10, 15));

declare function getValue(key: string): any;
// OK, return value of 'getValue' is not checked
const strin: string = getValue("myString");