var employee = {
    name: 'Amit',
    email: 'akshinde15@gmail.com',
    phone: 9975769495
};
function contact(details) {
    console.log("Dear ".concat(details.name, ".\n    I hope you have received our email at ").concat(details.email, ".\n    We will call you at ").concat(details.phone, " shortly ,"));
}
contact(employee);
