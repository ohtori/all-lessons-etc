const str: string = 'Hello';
const num: number = 42;
const float: number = 42.36;

const numArr: Array<number> = [1, 2, 3, 4];
const numArr2: number[] = [1, 2, 3, 4];
const strArr: Array<string> = ['1', '2', '3'];
const strArr2: string[] = ['1', '2', '3'];

//tuple
const contact: [string, number] = ['Vladilen', 123456];

//Any
let variable: any = 42;
variable = 'new string';

// ======
function sayMyName(name: string): void {
	console.log(name);
}
sayMyName('Heizenberg');

//Never
function throwError(message: string): never {
	throw new Error(message);
}

function infinite():never {
	while(true) {}
}

//Type
type Login = string;
const login: Login = 'Ilia';

type ResultStatus = 'Success' | 'Danger' | 'Error';
const resultStatus: ResultStatus = 'Success';

type ID = string | number;
const id: ID = '123';

type SomeType = string | null | undefined;

//something = 4;
function fn (arg: string): string {
  return '';
}