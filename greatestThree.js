function findGreatest(num1, num2, num3) {
    let greatest = num1; 
if (num2 > greatest) {
        greatest = num2;
    }
    if (num3 > greatest) {
        greatest = num3;
    }
return greatest; 
}
let num1 = 100, num2 = 50, num3 = 87;
let greatestNumber = findGreatest(num1, num2, num3);
console.log("The greatest number is: " + greatestNumber);
