function addTwo(num: number): number {
  return num + 2;
  //   return "hello"; //will give error
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
  return "done";
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
  return "cool";
};

addTwo(788);
getUpper("mononoke");
signUpUser(`johny`, "blooman@hyt.com", true);
loginUser("t", "t@t.com");

/*
when we need union types 
*/

// function getValue(myVal: number): string {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "batman", "ironman"];
// const heros = [1, 2, "dfjsd"];

const log = heros.map((hero): string => {
  return `hero is ${hero}`;
});
console.log(log);

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
