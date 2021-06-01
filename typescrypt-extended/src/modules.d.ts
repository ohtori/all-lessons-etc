export as namespace JSZ;

declare namespace JSZ {
  interface ICar {
    wheel: number
  }
}

interface ICar2 {
  wheel: number
}

declare function sayHi(message: string): void
declare function sayHi(message: number): void
declare function sayHi(message: ICar2): void