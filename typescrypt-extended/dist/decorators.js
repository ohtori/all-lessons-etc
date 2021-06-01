"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(opts) {
    return function (Constructor) {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
                document.querySelector(opts.selector).innerHTML = opts.template;
            }
        };
    };
}
function Bind(target, name, propertyDescriptor) {
    const origin = propertyDescriptor.value;
    return {
        enumerable: false,
        configurable: true,
        get() {
            return origin.bind(this);
        }
    };
}
class MyComponent {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log('Component name: ', this.name);
    }
    logName2() {
        console.log('Component name: ', this.name);
    }
}
__decorate([
    Bind
], MyComponent.prototype, "logName2", null);
const card = new MyComponent('My Component');
const btn = document.getElementById('btn');
btn ? btn.addEventListener('click', card.logName) : void 0;
//# sourceMappingURL=decorators.js.map