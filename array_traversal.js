const nums=[ 3, 4 ,6 ,8 , 7];
for(let i=0; i<nums.length; i++){
    console.log( nums[i]);
}

console.log('-----for of loop-----');
for(let i of nums){
    console.log(i);
}

console.log('-----for each function------');
nums.forEach( (n, a, f) =>{console.log(n, a, f);});