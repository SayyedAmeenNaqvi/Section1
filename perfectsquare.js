
function isPerfectSquare(num) {
   0
    if (num < 0) {
        return false;
    }
 let sqrtNum = Math.sqrt(num);
 return sqrtNum === Math.floor(sqrtNum);
}
let number = 35;
if (isPerfectSquare(number)) {
    console.log(number + " is a perfect square.");
} else {
    console.log(number + " is not a perfect square.");
}
