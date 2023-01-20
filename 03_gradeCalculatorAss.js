var math = Number(prompt("Please Enter Maths marks"));
var physics = Number(prompt("Please Enter Physics marks"));
var chem = Number(prompt("Please Enter Chemistry marks"));
confirm(" Entered marks :\n Maths marks : ".concat(math, " \n Physics marks : ").concat(physics, "\n Chemistry marks : ").concat(chem, "\n \n ** if correct press \"OK\""));
var totalmarks = math + physics + chem;
var ave = totalmarks / 3;
console.log("Marks in Maths : ".concat(math));
console.log("Marks in Physics : ".concat(physics));
console.log("Marks in Chemistry : ".concat(chem));
console.log("Total marks : ".concat(totalmarks, " "));
console.log("Average marks : ".concat(ave.toFixed(2), " "));
if (ave >= 90 && ave <= 100) {
    console.log("Grade : A");
}
else if (ave >= 70 && ave < 90) {
    console.log("Grade : B");
}
else if (ave >= 35 && ave < 70) {
    console.log("Grade : C");
}
else {
    console.log("You have failed, Please try again");
}
