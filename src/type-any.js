// explicit type
var idUser;
idUser = 1; // number
idUser = 'hola'; // string
console.log('isUser', idUser);
// infered type any
var otherId;
otherId = 1;
otherId = 'abc';
// otherId = true;
console.log('otherId', otherId);
var surprise = 'hello typescript';
// surprise.sayHello(); // error
var res = surprise.substring(6); // error in execution time if surprise is not string value
console.log(res);
