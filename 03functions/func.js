"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //   return "hello"; //will give error
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    return "done";
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return "cool";
};
addTwo(788);
getUpper("mononoke");
signUpUser("johny", "blooman@hyt.com", true);
loginUser("t", "t@t.com");
