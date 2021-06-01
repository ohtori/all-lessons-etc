// class Typescript {
// 	version: string;

// 	constructor(version: string) {
// 		this.version = version;
// 	}

// 	info(name: string): string {
// 		return `${name}: Typescript version is ${this.version}`
// 	}
// }

// class Car {
// 	readonly model: string;
// 	readonly numberOfWheels: number = 4;

// 	constructor(theModel: string) {
// 		this.model = theModel;
// 	}
// }

// class Car {
// 	readonly numberOfWheels: number = 4;
// 	constructor(readonly model: string) {}
// }

// //===========
// class Animal {
// 	protected voice: string = '';
// 	public color: string = 'black';

// 	constructor() {
// 		this.go()
// 	}

// 	private go() {
// 		console.log('go');
// 	}
// }

// class Dog extends Animal {
// 	public setVoice(voice: string) {
// 		this.voice = voice;
// 		//this.go();
// 	}
// }

// const dog = new Dog();
// dog.setVoice('Wow wow...');
// //dog.voice 

// //============
// abstract class Component {
// 	abstract render(): void;
// 	abstract info(): string
// }

// class AppComponent extends Component {
// 	render(): void {
// 		console.log('Component on render');
// 	}

// 	info(): string {
// 		return 'This is Info';
// 	}
// }

// interface ICarConstructor {
//   new(model: string): ICar
// }

// interface ICar {
//   setName(model: string)
// }

// const Car: ICarConstructor = class implements ICar {
//   constructor(model: string) {}

//   setName(model: string) {

//   }
// }

interface ICat {
  meow(): void
}

interface IAnimal {
  walk(): void
}

function createCat(): IAnimal & ICat {
  return {
    walk() {
      console.log('top top');      
    },
    meow() {
      console.log('meow meow');
    }
  }
}
