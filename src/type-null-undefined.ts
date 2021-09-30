// null

// explicit
let nullVariable: null;
nullVariable = null;
// nullVariable = '1'; // error!

let otherVariable = null;
// otherVariable = 1;

console.log('null variable:', nullVariable);
console.log('other variable:', otherVariable);

// undefined
let undefinedVariable: undefined = undefined;
// undefinedVariable = 1; // error!

let otherUndefined = undefined;
// otherUndefined = 1;

console.log('undefined variable:', undefinedVariable);
console.log('other undefined:', otherUndefined);

// null y undefined: como subtipos

// --strictNullChecks
let albumName: string;
// albumName = null;
// albumName = undefined;