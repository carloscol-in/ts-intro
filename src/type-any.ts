// explicit type
let idUser: any;
idUser = 1; // number
idUser = 'hola'; // string
console.log('isUser', idUser);

// infered type any
let otherId;
otherId = 1;
otherId = 'abc';
// otherId = true;
console.log('otherId', otherId);

let surprise: any = 'hello typescript';
// surprise.sayHello(); // error
const res = surprise.substring(6); // error in execution time if surprise is not string value
console.log(res);