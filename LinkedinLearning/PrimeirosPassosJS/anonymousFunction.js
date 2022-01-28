fractionA = 5 / 7;
fractionB = 18 / 25;

var theBiggest = function () {
  //You can put on variable a function, this make it a anonymous function.
  var result;
  fractionA > fractionB
    ? (result = ["A", fractionA])
    : (result = ["B", fractionB]);
  return result;
};

console.log(theBiggest(fractionA, fractionB));

//try this too

var bigger = function (x, y) {
  var result;
  x > y ? (result = ["X", x]) : (result = ["Y", y]);
  return result;
};

console.log(bigger(7 / 9, 13 / 25));
