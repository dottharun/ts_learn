let score: number | string = 3;

score = 44;
score = "doom killer";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let vishal: User | Admin = { name: "vish", id: 334 };

vishal = { name: "bish", username: "not cool", id: 8980 };

// function getDbId(id: number | string) {
//   //making some api calls
//   console.log(`DB id is: ${id}`);
// }
// getDbId(3);
// getDbId("8098-0");

/*
special ts quirk
*/

function getDbID(id: string | number): void {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//arrays
const data: number[] = [1, 2, 3, 4];
const data2: (string | number)[] = ["s", "dfd", "df", 438, "df", 9809];
const data3: string[] | number[] = ["df", "df"];

//value types
let seatAllotments: "aisle" | "middle" | "window" = "aisle";

seatAllotments = "window";
// seatAllotments = "crew"; //will give error

export {};
