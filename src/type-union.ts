export {};

// 10, '10'
// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// // search username by id
// function getUsernameById(id: number | string) {
//     // business logic
//     return 'abc';
// }

// getUsernameById(10);
// getUsernameById('10');

// type alias: ts
type IdUser = number | string;
type Username = string;
let idUser: IdUser;
idUser = 10;
idUser = '10';

// search username by id
function getUsernameById(id: IdUser): Username {
    // business logic
    return 'abc';
}

getUsernameById(10);
getUsernameById('10');

// literal types
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000';
let smallPicture: SquareSize = '100x100';
// let smallPicture: SquareSize = '200x200'; // error
let mediumPicture: SquareSize = '500x500';
// let mediumPicture: SquareSize = '600x600'; // error