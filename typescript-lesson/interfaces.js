;
var meow = {
    age: 2,
    name: 'Murka',
    sayMeow: function () {
        console.log('Meow Meow...');
    }
};
var meow3 = {};
var meow4 = {};
var meow5 = {
    age: 2,
    name: 'Murka',
    sayMeow: function () {
        console.log('Meow Meow...');
    },
    getAge: function () {
        return this.age;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
