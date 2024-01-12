const user = {
  username: 'Kishan',
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    // console.log(`username:${this.username}`);
    // console.log(this);
  },
};
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedin) {
  (this.username = username),
    (this.loginCount = loginCount),
    (this.isLoggedin = isLoggedin);

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}
const userOne = new User('kishan', 10, true);
const userTne = new User('Mohini', 8, false);
console.log(userOne.constructor);
// console.log(userTne);
