export {};
// function

// create photograph
function createPicture(title, date, size) {}

type SquareSize = '100x100' | '500x500' | '1000x1000';

// use TS, define type for params
function createPhoto(title: string, date: string, size: SquareSize) {
    // photo gets created
    console.log('create photo using', title, date, size);
}

createPhoto('Forest', '2021-01-01', '100x100');
// createPhoto('Snowy city', '2021-02-02'); // error

// optional params
function createPic(title?: string, date?: string, size?: SquareSize) {
    console.log('create photo using', title, date, size);
}

createPic('Snowy city', '2021-02-02'); // error


// flat array functions
let makePic = (title: string, date: string, size: SquareSize): object => {
    return {
        title,
        date,
        size
    };
}

console.log(makePic('Castle', '2020-01-01', '500x500'));

// return type in TS
function handleError(code: number, message: string): never | string {
    // code
    if (message === 'error') throw new Error();
    else return 'All good';
}

console.log('result', handleError(200, 'ok'));
// console.log('result', handleError(400, 'error')); // throws error
