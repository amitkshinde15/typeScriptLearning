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

// let a = [10,15,10,22,21,10,15];
// let occurance = {};
// for (const i of a) {
//         if(i in occurance){
//           occurance[i]++;

//         }
//     else{
//         occurance[i]=1;
//     }
// }
// console.log(occurance);
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

// Occurance of letter

// let str='abcadbacdb'

//           var obj = {};
//           for (let i = 0; i < str.length; i++) {
//             if (str[i] in obj) {
//              // obj[str[i]]= obj[str[i]]+1;
//               obj[str[i]] ++;
//             } else {
//               obj[str[i]] = 1;
//             }
//           }
//           console.log(obj); // {a:3,b :3,c:2,d:2}

// const response = {
//   maran: {
//     count: 1,
//   },
//   gas: {
//     count: 2,
//   },
//   prelude: {
//     count: 5,
//   },
//   keys: ['maran', 'gas', 'prelude'],
// };

// let sum = 0;
// for (const key in response) {
//   if (Object.hasOwnProperty.call(response, key)) {
//     const element = response[key];
//     if(typeof element.count == "number"){
//     sum = sum + element.count;
//     }
//   }
// }
// console.log(sum);

// let num = 0;
// for (const key of response.keys) {
//   num = num + response[key].count;
// }
// console.log(num);

//const f = [2,10,5,1,0];
// let a = f.sort((a, b)=>{
//   return a > b ? 1 : -1;
// })
// console.log(a);



// const a = [1,1,5,2,1,8];
// // const b = new Set(a);
// // console.log(b);
// const c = a.filter((b,i)=>{
//    return a.indexOf(b) ==i;
// });
// console.log(c);


// const arr = ['sachin','mahesh'];
// let[f1,f2,f3='deepak']= arr;
// console.log(f1,f2,f3);

//Output should be -  'you are how hello'
// let str = 'hello how are you';
// let str1 = str.split(" ");
// let rev = "";
// for(let i=str1.length-1;i>=0;i--){
//     rev = rev+" "+str1[i];
// }
// console.log(rev);

// let str = 'hello how are you';
// let str1 = str.split(" ").reverse().join(' ');
// console.log(str1);   


//output Hi This Is Codemind Technology

// let str = "hi this is codemind technology";
// let str1='';

// for (let i = 0; i < str.length; i++) {
//   let c = str.charAt(i);
//   if (i == 0) {
//     str1 = str1 + c.toUpperCase();
//   } else if (c == " ") {
//     i = i + 1;
//     c = str.charAt(i);
//     str1 = str1 + " " + c.toUpperCase();
//   } else {
//     str1 = str1 + c.toLowerCase();
//   }
// }
// console.log(str1);

// Second method

// var str1 = "hi this is codemind technology";

//  let splitStr = str1.split(" ")

//  for(i=0; i<splitStr.length; i++){

//     splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1)
//  }
//  let str2 = splitStr.join(" ")
//  console.log(str2);


console.log("start");

setTimeout(function(callback) {
  console.log("continue");
},1000);

console.log("End");