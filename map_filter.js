// WAP to create a new array containing only perfect squares from another array.

const nums=[2,4,7,23,56,76,89,56,65];
const perfect=[];
for (let i of nums){
    if(Number.isInteger(i**0.5)){
        perfect.push(i);
    }

}

console.log(perfect);

// WAP to create a new array containing 10% discounted prices from an array of prices

const prices=[100,210,280,300,500];
const discounted=[];
for(let p of prices){
    discounted.push(p * 0.9);
}
console.log(discounted);


// MAP

const discountedPrices =prices.map( (p) =>{return p* 0.9});
console.log(discountedPrices);
  
// ******** //

const sqrNums =nums.map((n) =>{ return n **2});
console.log(sqrNums);

const perfectNums =nums.filter((n)=> {return Number.isInteger(n **0.5)});
console.log(perfectNums);


const prices2 =['₹423.23','₹124.453', '₹6778.9', '₹999.9982'];
const intprices = prices2.map((p)=>{return parseInt(p.slice(1))});
console.log(intprices);

console.log(parseInt('₹423.23'. slice(1)));


const names2 =['ramu', 'shamu', 'pinki','kaliya']


// Create any UpperCase Names

let nameMap = new Map();

function addNameToMap(name) {
    let uppercaseName = name.toUpperCase();
    nameMap.set(name, uppercaseName);
}


addNameToMap("Joy");
addNameToMap("Ali");
addNameToMap("Bobby");


console.log(nameMap.get("Joy"));  
console.log(nameMap.get("Ali"));  
console.log(nameMap.get("Bobby")); 