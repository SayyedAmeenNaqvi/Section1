//Ternary operator 
let age= 6;
age>= 18 ? console.log('adult'): console.log('not adult'); 

//Switch Statement

const expr ='Mango';
switch (expr){
    case'orange':
    console.log('orange are ₹34.55 ');
    break;
    case'banana':
    case'Mango':
    console.log('Mango and banana are ₹45.98');
    break;
    default:
        console.log('sorry,we are out of ₹{expr}.');
}

// Get a user a number using prompt("enter a number"). check if the number is multiple of 5 or not.

 let num = ("enter a number:");
 if (num % 5 === 0) {
    console.log(num,"is a multiple of 5");
 } else {
        console.log(num,"is not a multiple of 5");
    }
    

