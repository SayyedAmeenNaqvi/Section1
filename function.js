// function addNums(a,b){
//     c= a+b;
//     console.log(c);
// }
//  addNums(3,5);
//  console.log(c);

const getAvg = function(m1, m2, m3){
    const avg =(m1+m2+m3)/3;
    console.log(avg);

}
 let result =getAvg(78, 89 ,90);

 console.log(result);

 const factorial =(n) => {
    let f =1;
    for(let i=1; i<=n; i++){
        f = f*i;
    }
    return f;
 }
 let ans =factorial(6);
 console.log(ans);


//  WAP to find sum of all number in a given range






function  print (){
    console.log("ameen");
}

print()



let fullnAME = function(first , last){
return first + " "+last
}


console.log(fullnAME("sayyed","Ameen"));

function addNumsv1(a,b){
    return[a+b, a*b]
}
const res =addNumsv1(545, 4356);
console.log(res);
const[sum, prod]=res;
console.log(sum);


const addNums23 =function(a,b){
    return a+b;

}
const res2 = addNums23(345, 723);
console.log(res2);


const addNums24 =(a, b)=>{
    return a=b;

}
const res3 =addNums24(345 ,723);
console.log(res3);



