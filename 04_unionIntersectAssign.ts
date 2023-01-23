console.log(`------ 01. Union Type - Assigning datatype as string | number | string[]----------`);

type details = 
string | number | string[];
var emptyArray = [''];
function empDetails(empdata:details){
    if(typeof empdata === "string"){
        console.log(`String value = ${empdata}`);
    }
    else if(typeof empdata === "number"){
        console.log(`Number value = ${empdata}`);
        
    }
    else{
        for (const iterator of empdata) {
            console.log(`Array value = ${empdata}`); 
        } 
        
    }              
 }   

empDetails('Amit');
empDetails(9975769495);
empDetails(['Hey','Amit','Shinde']);

console.log(`--------------- 02. Using class parameter properties --------------------------`);
class EmpInfo{
    constructor(public fName:string, public lName:string, public contact:number){

    }
}
const emp1 = new EmpInfo('Amit','Shinde',9975769495);
const emp2 = new EmpInfo('Sachin','Tendulkar',8888603488);
console.log(`Emlpoyee Information : ${emp1.fName} ${emp1.lName} ${emp1.contact}`);
console.log(emp2);

console.log(`--------------- 03. Intersection Type --------------------------`);
type studName = {
    name: string
}
type studEmail = {
    email: string
}
type studPhone = {
    phone: number;
}
type studDetails =  
& studName 
& studEmail 
& studPhone;

let employeeDetails : studDetails={
    name : 'Amit',
    email : 'akshinde15@gmail.com',
    phone : 9975769495
}

function studInfo(details: studDetails){
    console.log(`Dear ${details.name}.
    I hope you have received our offer letter at ${details.email}.
    We will call you at ${details.phone} shortly ,`) ;
}
studInfo(employeeDetails);

console.log(`--------------- 04. Optional parameters --------------------------`);
function empSalary(empId:number, empName: string, empCompany?: string){
    console.log(`Employee ID : ${empId}`);
    console.log(`Employee Name : ${empName}`);
    if(empCompany!=undefined){
    console.log(`Employee Company : ${empCompany}`);
    } 
}
empSalary(11, 'Sagar Shingan', 'TCS');
console.log(`--------------------------------------------------------------------`);

empSalary(22, 'Rohit Shewale');




