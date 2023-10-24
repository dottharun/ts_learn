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
var MaUser = /** @class */ (function () {
    function MaUser(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Jaipur";
    }
    Object.defineProperty(MaUser.prototype, "getAppleEmail", {
        //getter and setter
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaUser.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        //return type cannot be specified as its locked to void
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("course count should be less than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return MaUser;
}());
var hitesh = new MaUser("h@h.com", "hitty", 566);
