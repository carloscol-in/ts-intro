// void

// explicit type
function showInfo(user: any): any {
    console.log('User info', user.id, user.username, user.firstName);
}

showInfo({id: 1, username: 'joe', firstName: 'Joe'});

// infered type
function showFormattedInfo(user: any) {
    console.log('User Info:', `
    id: ${user.id}
    username: ${user.username}
    first name: ${user.firstName}
    `);
}
showFormattedInfo({id: 1, username: 'joe', firstName: 'Joe'});

// void type, as data type
let unusable: void;
unusable = null; // error if using "strict" = true
unusable = undefined;


// type: never
function handleError(code: number, message: string): never {

    // process your code here
    // generate message
    throw new Error(`${message}. Code: ${code}`);

}

try {
    handleError(400, 'Not found');
} catch (err){
    console.log(err.message);
}

// 
function sumNumbers(limit: number): never {
    let sum: number = 0;
    while (true) {
        sum++;
    }
    // return sum;
}

sumNumbers(10);
// infinite cycle