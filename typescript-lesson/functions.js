function add(a, b) {
    return a + b;
}
function toUppercase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    else if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty', position());
console.log('Empty', position(42));
console.log('Two params', position(10, 15));
// OK, return value of 'getValue' is not checked
var strin = getValue("myString");
