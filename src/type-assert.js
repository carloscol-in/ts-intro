"use strict";
exports.__esModule = true;
// <> // Angle bracket syntax
var username;
username = 'abc';
username = 'abcdef';
// we have a string, trust me, TS.
var message = username.length > 5 ?
    "Welcome " + username :
    "Error: Username is too short";
console.log('message', message);
var usernameWithId = 'abcdef 1';
// Obtain username
username = usernameWithId.substring(0, 6);
console.log('username', username);
// syntaxis "as"
message = username.length > 5 ?
    "Welcome " + username :
    "Error: Username is too short";
var helloUser;
helloUser = 'hello abcdef';
username = helloUser.substring(6);
console.log('username', username);
