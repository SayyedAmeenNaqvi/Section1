const arr1 =['Hello', 34567, false, null];
console.log(arr1);
console.log( typeof arr1);
console.log(Array.isArray(arr1));

const movies =['Dangal','Kill','PK','Kick','jawan'];
console.log(movies.length);

// indexing
console.log( movies[3]);
console.log( movies.at(-2));
console.log( movies.at(2));

movies[3]='Krish';
console.log(movies);

console.log( movies.indexOf('Kill')); 

// slicing
console.log(movies);
console.log(movies.slice(2,5));
console.log(movies.slice(2,-3));
console.log(movies.slice(2,));
console.log(movies.slice(2,60));

// adding and removing elements

movies.push('Kalki'); //adds element at end of array
console.log(movies);

movies.unshift('KGF'); //adds elements at start of array
console.log(movies);

movies.pop();// removes elements from end of array
movies.shift();// removes elements from start of array

console.log(movies);

// movies.splice(3,2);
movies.splice(3, 0, 'Deadpool', 'Venom');
console.log(movies);