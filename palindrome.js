// function isPalindome(value){
//     let rev = value.split('').reverse().join('');
//        if(value == rev){
//         console.log(`Given string "${value}" is palindrom`);
//     }
//     else
//     console.log(`Given string "${value}" is not palindrom`);
// }
// isPalindome("madam");  
// isPalindome("madan");  

// const person = {
//     first_name : 'Akshay',
//     age : 25,
//     grad : 'BE'
// }
// let firstname = person.first_name;
// let age1 = person.age;
// console.log(firstname, age1);
// let {first_name, grad} = person;
// console.log(first_name, grad);

// const fruits = ["Apple", "Mango", "Banana", "Watermelon"];
// let fruit= fruits[0];
// console.log(fruit);
// let [fruits1, fruits2] = fruits;
// console.log(fruits1, fruits2);


// let a = [12,15,17,12,15];
// let b = a.filter((value, index)=>{
//     return a.indexOf(value) == index;
// });
// console.log(b);

let a = [10,15,10,22,21,10,15];
let occurance = {};
for (const i of a) {
        if(i in occurance){
        occurance[i]=occurance[i] +1;
        
        }
    else{
        occurance[i]=1;
    }
}
console.log(occurance);
// for (const key in occurance) {
//     // if (Object.hasOwnProperty.call(occurance, key)) {
//     //     const element = occurance[key];
//     //     console.log(`Occurance of number ${key} = ${element}`);
//         // }
//         console.log(key , occurance[key]);
//     }


// let num = 5.55;
// console.log(Math.floor(num));
// console.log(Math.round(num));



