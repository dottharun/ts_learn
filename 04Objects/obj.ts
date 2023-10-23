const User = {
  name: "tharun",
  email: "tharun@allplaces.com",
  isActive: true,
};

//return object --weird syntax
function createCourse(): { name: string; teacher: string } {
  return {
    name: "tamil advanced",
    teacher: "thiruvalluvar",
  };
}

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "tharun", isPaid: false });

// //bad ts behaviour - we will expect ts to catch this but not catched
// const newUser = { name: "tt", isPaid: true, email: "tt@shady.com" };
// createUser(newUser);

/*
works good
*/

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return user;
// }

// createUser({ name: "tharun", email: "tt@t.com", isActive: false });

/*
readonly
*/

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

const myUser: User = {
  _id: "1234",
  name: "tt",
  email: "tt@tharun.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

myUser.email = "h@gmail.com";
// myUser._id = "asa";

export {};
