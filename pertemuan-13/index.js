// Rest Parameter & Spread Operator


// 1. Rest Parameter
// tanpa rest paraneter
const func1 = (param1, param2, param3) => {
    console.log(param1, param2, param3);
};

func1("A", "B", "C");

// dengan rest parameter
const func2 = (...params) => {
    console.log(params);
};

func2("A", "B", "C");

// Rest Parameter harus berada di parameter terakhir
const func3 = (param1, param2, ...params) => {
    console.log(param1, param2);
    console.log(params);
};
func3("A", "B", "C", "E", "D");

// Mini Exercise
// Ubah dengan menggunakan rest parameter
const penjumlahan = (a, b, c, d, e) => {
    let arr = [a, b, c, d, e];
    let hasil = 0;
    arr.forEach((item) => (hasil += item));
    return hasil ;
}

console.log(penjumlahan(1, 2, 3, 4, 5));

// Answer : menggunakan rest parameter
const penjumlahan1 = (...params) => {
    let hasil = 0;
    params.forEach((item) => (hasil += item));
    return hasil;
};

console.log(penjumlahan1(1, 2, 3, 4, 5)); 

// 2. Spread Operator

let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);
console.log(...numbers);

// pada array
// 1. Saat duplikasi array
let numbers2 =[...numbers];
console.log(numbers2);

// 2. Menggabungkan array
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let numbers3 = array1.concat(array2, array3) ; //ES5
let numbers4 = [...array1, ...array2, ...array3]; //ES6

// Object
// 1. Duplikasi object
const john = {
    fullName: "John Doe",
    age: 30,
};

const john2 = { ...john, address: "Manado" };

// 2. Menggabungkan object
let obj1 = { a: 1, b: 2}
let obj2 = { c: 3, d: 4}

let combinedObj = { ...obj1, ...obj2};
