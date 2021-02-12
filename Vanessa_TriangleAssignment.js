let RightTriangle = new Object();
function getArea (b,h) {
    var d = .5;
    RightTriangle.b = b;
    RightTriangle.h = h;
        return b * h * d;
}
console.log(RightTriangle);
console.log(getArea(12, 12,)); //test one
console.log(getArea(4, 8)); //test two
console.log(getArea(3, 6)); // smlTriangle
console.log(getArea(10, 20)); // bigTriangle

let smallTriangle = new Object();
function getArea (b,h) {
    var d = .5;
    RightTriangle.b = b;
    RightTriangle.h = h;
        return b * h * d;
}
if (smallTriangle === 9) {
    console.log("small triangle test passed");
} 
else {
    console.log("small triangle test failed");
}
console.log(smallTriangle)
console.log(getArea(3, 6));



let bigTriangle = new Object();
function getArea (b,h) {
    var d = .5;
    RightTriangle.b = b;
    RightTriangle.h = h;
        return b * h * d;
}
if (bigTriangle === 100) {
    console.log("big triangle test passed")
} 
else {
        console.log("small triangle test failed");
    }
console.log(bigTriangle)
console.log(getArea(10, 20));




//NOTES//
// function getArea (b,h) {
//         var d = .5;
//         return b * h * d;
//         }
// console.log(getArea(12, 12));
// console.log(getArea(4, 8));