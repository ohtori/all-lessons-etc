var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["black"] = 4] = "black";
    Color[Color["green"] = 22] = "green";
    Color[Color["blue"] = 42] = "blue";
})(Color || (Color = {}));
var g = Color.green;
console.log(Color[4]);
