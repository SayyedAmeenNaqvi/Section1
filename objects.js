const user ={
    name :'Raju',
    email :'raju@gmail.com',
    password :'abc123'

};

console.log(user.email);
console.log(user['name']);

user.email= 'raju007@gmail.com';
console.log(user);

user.country ='India';
console.log(user);

user.address ='Lucknow';
console.log(user);

console.log( Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const brand ='Samsung';
const model ='S24';
const price ='105000';
const colors =['red', 'black', 'white'];

const smartphone ={ brand, model ,price, colors};
console.log(smartphone);

const{address}=user;
console.log(address);

console.log(smartphone.price);

console.log(smartphone.colors[1]);
smartphone.colors.push('pink');
console.log(smartphone);

smartphone.colors[2]='moonwhite'
console.log(colors);


const smartphoneList = [
    {
        brand: 'Samsung',
        model: 'S24',
        price :'105000',
        colors:['red','black','white']
    },
    {
        brand: 'Oneplus',
        model: '12',
        price :'45000',
        colors:['green','grey','white']
    },
    {
        brand: 'Apple',
        model: '16',
        price :'108000',
        colors:['green','blue','white']
    },
    {
        brand: 'Google',
        model: 'Pixel 8',
        price :'55000',
        colors:['yellow','black','green']
    },
    {
        brand: 'MotoRola',
        model: 'G8',
        price :'14999',
        colors:['yellow','white','green']
    }
]
console.log(smartphoneList[2].price);
console.log(smartphoneList[3].colors[2]);
console.log(smartphoneList[4].colors.at(-1));

const myphones =smartphoneList.filter((phone) =>{ return phone.price<=50000});
console.log(myphones);

let filter1= smartphoneList.filter(function(phone){
    return phone.brand ==="Samsung"
})
console.log(filter1);

const samsungPhones =smartphoneList.filter((phone)=> {return phone.brand.toLowerCase().includes(query.toLowerCase)})
console.log(samsungPhonesList);

let filter3 = smartp.filter(function(phone){
    return phonehoneList.colors.includes("white")
})
console.log(filter3);