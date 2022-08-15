//Hoisting

//1
console.log('--1--'); 
var hello;
console.log(hello);   // undefined                                    
var hello = 'world';                                 


//2

console.log('--2--'); 
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle); // magnet
}

//3
console.log('--3--'); 
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan); 
}
console.log(brendan); // super coll
//becuase not call the function 

//4
console.log('--4--'); 
var food = 'chicken';
console.log(food); // chicken
eat(); 
function eat(){
    food = 'half-chicken';
    console.log(food); //half-chicken
    var food = 'gone';
}

// 5 
console.log('--5--')
 mean();
console.log(food); 
var mean = function() {
    food = "chicken";
    console.log(food); 
    var food = "fish";
    console.log(food);
}
console.log(food); //ReferenceError: chicken is not defined


//6
console.log('--6--')
console.log(genre); //  undfine 
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre); // rock 
    var genre = "r&b";
    console.log(genre); //r&b
}
console.log(genre); //disco

// 7
 console.log('--7--')
 dojo = "san jose";
console.log(dojo); // san jose
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo); //seattle
    var dojo = "burbank";
    console.log(dojo); // burbank
}
console.log(dojo); //san jose


