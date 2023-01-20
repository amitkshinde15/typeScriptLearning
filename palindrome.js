function isPalindome(value){
    let rev = value.split('').reverse().join('');
       if(value == rev){
        console.log(`Given string "${value}" is palindrom`);
    }
    else
    console.log(`Given string "${value}" is not palindrom`);
}
isPalindome("madam");  
isPalindome("madan");  

const person = {
    first_name : 'Akshay',
    age : 25,
    grad : 'BE'
}
let firstname = person.first_name;
let age1 = person.age;
console.log(firstname, age1);
let {first_name, grad} = person;
console.log(first_name, grad);

const fruits = ["Apple", "Mango", "Banana", "Watermelon"];
let fruit= fruits[0];
console.log(fruit);
let [fruits1, fruits2] = fruits;
console.log(fruits1, fruits2);