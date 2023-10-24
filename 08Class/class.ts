/*
big clunky class
*/

// class MaUser {
//   public email: string;
//   private name: string;
//   readonly city: string = "Jaipur";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

/*
simplified version

--same version as above
*/

class MaUser {
  private _courseCount = 1;

  readonly city: string = "Jaipur";
  constructor(
    public email: string,
    public name: string,
    private userId: number
  ) {}

  //getter and setter
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  //return type cannot be specified as its locked to void
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error(`course count should be less than 1`);
    }
    this._courseCount = courseNum;
  }
}

const hitesh = new MaUser("h@h.com", "hitty", 566);
