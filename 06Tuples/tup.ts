/*
TUPLE:
a type of array 

order is enforced with types
*/

// const user: (string | number)[] = [1, "ch"];
let user: [string, number, boolean];

user = ["my man", 34, true];

let rgb: [number, number, number] = [255, 122, 123];

type User = [number, string];

const newUser: User = [112, "exam@ple.com"];
