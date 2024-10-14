// EXERCISE 7
// DESTRUCTURING

// 1. Destructuring (Array & Object)
// a. Array
const fruits = ['Apple', 'Grape', 'Strawberry'];

const [firstFruit, secondFruit] = fruits;

console.log(firstFruit);   
console.log(secondFruit);  

// b. Object
const person = { name1: 'Rezza', age: 19, city: 'Manado' };

const { name1, age } = person;

console.log(name1); 
console.log(age);  


// 2. Destructuring dengan mengambil sebagian item (Array & Object)
// a. Array
const colors = ['Red', 'Green', 'Blue'];

const [firstColor, , thirdColor] = colors;

console.log(firstColor);  
console.log(thirdColor); 

// b. Object
const smartphone = { brand: 'Samsung', model: 'Galaxy S21', year: 2021, color: 'Black' };

const { brand, year } = smartphone;

console.log(brand);  
console.log(year);  


// 3. Destructuring dengan menggunakan default value (Array & Object)
// a. Array
const arr = [5];

const [first = 1, second = 2] = arr;

console.log(first);  
console.log(second); 

// b. Object
const user = { username: 'Rezza' };


const { username, age2 = 18 } = user;

console.log(username); 
console.log(age2);   


// 4. Destructuring dengan menggunakan rest operator (Array & Object)
// a. Array
const animals = ['Lion', 'Tiger', 'Elephant', 'Zebra', 'Giraffe'];

const [firstAnimal, ...restAnimals] = animals;

console.log(firstAnimal);    
console.log(restAnimals);    

// b. Object
const employee = { id: 101, name: 'Rezza Pontoh', position: 'Developer', salary: 8000 };

const { id, name2, ...restDetails } = employee;

console.log(id);         
console.log(name2);       
console.log(restDetails); 


// EXERCISE - 6
// 1. objek { year, firstName } dipecah langsung dalam parameter fungsi menggunakan destructuring.
const calculateAge = birthYear => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
    const age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

// 2. penggunaan rest operator pada parameter ...numbers memudahkan untuk menerima banyak argumen.
const addNumber = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3. destructuring digunakan untuk memecah properti objek yang diterima dalam fungsi calculateArea.
const phi = 3.14;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

const area21 = calculateArea({ radius: 21, power: 2 });
const area7 = calculateArea({ radius: 7, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4. default parameter disetel untuk argumen method agar bisa diisi otomatis dengan 'GET' jika tidak ada input.
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
};

makeAjaxRequest('www.google.com');



