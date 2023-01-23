type Person2 = {
    name: string
}
type Email = {
    email: string
}
type Phone = {
    phone: number;
}
type ContactDetails =  
& Person2 
& Email 
& Phone;

let employee : ContactDetails={
    name : 'Amit',
    email : 'akshinde15@gmail.com',
    phone : 9975769495
}
function contact(details: ContactDetails) {
    console.log(`Dear ${details.name}.
    I hope you have received our email at ${details.email}.
    We will call you at ${details.phone} shortly ,`) ;
   
}
contact(employee);


