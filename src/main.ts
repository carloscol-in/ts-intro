console.log("Hola TypeScript con Platzi!");

// number
// explicit
let phone: number;
phone = 1;
phone = 5511223344;
// phone = 'hola'; // Error

// implicit / infered
let phoneNumber = 555555555;
phone = 123;
// phone = false; // Error

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// boolean
let isPro: boolean;
isPro = true;
// isPro = 'true'; // Error

// infered / implicit
let isUserPro = false;
isUserPro = true;
// isUserPro = 123; // Error

// strings
let username: string;
username = 'john';
// username = true; // Error

// template string
// use of backtick `
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' doe'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);