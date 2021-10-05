console.log("Hola TypeScript con Platzi!");
// number
// explicit
var phone;
phone = 1;
phone = 5511223344;
// phone = 'hola'; // Error
// implicit / infered
var phoneNumber = 555555555;
phone = 123;
// phone = false; // Error
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// boolean
var isPro;
isPro = true;
// isPro = 'true'; // Error
// infered / implicit
var isUserPro = false;
isUserPro = true;
// isUserPro = 123; // Error
// strings
var username;
username = 'john';
// username = true; // Error
// template string
// use of backtick `
var userInfo;
userInfo = "\n    User Info:\n    username: " + username + "\n    firstName: " + (username + ' doe') + "\n    phone: " + phone + "\n    isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
