// void
// explicit type
function showInfo(user) {
    console.log('User info', user.id, user.username, user.firstName);
}
showInfo({ id: 1, username: 'joe', firstName: 'Joe' });
// infered type
function showFormattedInfo(user) {
    console.log('User Info:', "\n    id: " + user.id + "\n    username: " + user.username + "\n    first name: " + user.firstName + "\n    ");
}
showFormattedInfo({ id: 1, username: 'joe', firstName: 'Joe' });
// void type, as data type
var unusable;
unusable = null; // error if using "strict" = true
unusable = undefined;
// type: never
function handleError(code, message) {
    // process your code here
    // generate message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(400, 'Not found');
}
catch (err) {
    console.log(err.message);
}
// 
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
    // return sum;
}
sumNumbers(10);
// infinite cycle
