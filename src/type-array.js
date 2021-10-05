// array
// explicit type
var users;
users = ['abc', 'def', 'ghi'];
// users = [1, 'abc', true]; // error
// infered
var otherUsers = ['abc', 'def', 'ghi'];
// otherUsers = [1, 'abc', true]; // error
// Array<Type>
var pictureTitles;
pictureTitles = ['Favourite Sunset', 'Rainy Day', 'Warm Day at the Park'];
// accessing the values in an array
console.log('first user:', users[0]);
console.log('first title:', pictureTitles[0]);
// properties within arrays
console.log('users.length', users.length);
// functions within arrays
users.push('xyz');
users.push('aaa');
users.sort();
console.log('users:', users);
