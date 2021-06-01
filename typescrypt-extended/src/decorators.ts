// function Log(constructor: Function) {
//   console.log(constructor);
// }

// function Log2(target: Object, propName: string | Symbol) {
//   console.log(target, 1111111111111111111);
//   console.log(name, 222222222222222222222);
// }

// function Log3(target: Object, propName: string | Symbol, descriptor: PropertyDescriptor) {
//   console.log(descriptor, 1111111111111111111);
//   console.log(target, 222222222222222222222);
// }

// @Log
// class Component1 {
//   @Log2
//   name: string
  
//   constructor(name: string) {
//     this.name = name
//   }

//   @Log3
//   get componentName(): string {
//     return this.name
//   }

//   @Log3
//   logName() {
//     console.log(this.name);
//   }
// }


type ComponentOptions = {
  template: string,
  selector: string
}

function Component(opts: ComponentOptions) {
  return function <T extends {new(...args: any[]): object}>(Constructor: T) {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args);
        document.querySelector(opts.selector)!.innerHTML = opts.template;
      }
    }
  }
}

function Bind(target: Object, name: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
  //propertyDescriptor.value = propertyDescriptor.value.bind(target.constructor)
  const origin = propertyDescriptor.value;
  return {
    enumerable: false,
    configurable: true,
    get() {
      return origin.bind(this)
    }
  }
}



class MyComponent {
  constructor(private name: string) {

  }

  logName() {
    console.log('Component name: ', this.name);    
  }

  @Bind
  logName2() {
    console.log('Component name: ', this.name);    
  }
}

const card = new MyComponent('My Component');

const btn = document.getElementById('btn');

btn ? btn.addEventListener('click', card.logName) : void 0;

// type ValidatorType = 'required' | 'email';

// interface ValidatorConfig {
//   [prop: string]: {
//     [validateProp: string]: ValidatorType
//   }
// }

// const validators: ValidatorConfig = {}

// function Required(target: object, propName: string) {
//   validators[target.constructor.name] = {
//     ...validators[target.constructor.name],
//     [propName]: 'required'
//   }
// }

// function validate(obj: any): boolean {
//   const objConfig = validators[obj.constructor.name];
//   if (!objConfig) {
//     return true
//   }
//   let isValid = true;
//   Object.keys(objConfig).forEach(key => {
//     if (objConfig[key] === 'required') {
//       isValid = isValid && !!obj[key]
//     }
//   });
//   return isValid;
// }

// class Form {
//   @Required
//   public email: string | undefined

//   constructor(email?: string) {
//     this.email = email;
//   }
// }

// const form = new Form('Form');

// if(validate(form)) {
//   console.log('Valid: ', form);
// } else {
//   console.log('Validation Error');
// }