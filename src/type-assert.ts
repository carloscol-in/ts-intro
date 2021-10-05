export {};

// <> // Angle bracket syntax
let username: any;
username = 'abc';
username = 'abcdef';

// we have a string, trust me, TS.
let message: string = (<string>username).length > 5 ?
                        `Welcome ${username}` :
                        `Error: Username is too short`;

console.log('message', message);

let usernameWithId: any = 'abcdef 1';
// Obtain username
username = (<string>usernameWithId).substring(0, 6);

console.log('username', username);

// syntaxis "as"
message = (username as string).length > 5 ?
        `Welcome ${username}` :
        `Error: Username is too short`;

let helloUser: any;
helloUser = 'hello abcdef';
username = (helloUser as string).substring(6);
console.log('username', username);