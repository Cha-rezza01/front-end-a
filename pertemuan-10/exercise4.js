// Exercise - 4
// Array Exercises

let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

people.forEach(person => console.log(person));
people.shift(); 
people.pop(); 
people.unshift("Matt"); 
people.push("Rezza"); 

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

let newPeople = people.slice(2); 
console.log(newPeople);

people = ["Matt", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie"); 
console.log(people);

let withBob = people.concat("Bob"); 
console.log(withBob);

people.splice(4, 1, "Rezza"); 
withBob = people.concat("Bob"); 
console.log(withBob);


// Object Exercises

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go"); 
console.log(programming.languages); 

programming["difficulty"] = 7; 
console.log(programming.difficulty); 

delete programming.jokes; 
console.log(programming); 

programming.isFun = true; 
console.log(programming); 

programming.languages.map(function(language, index) {
    console.log(index + " - " + language);
});
