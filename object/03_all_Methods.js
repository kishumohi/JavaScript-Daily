let DATA = 'Sectet information';
//-------------------------------------
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log('data :- ', DATA);
  }
}
//-------------------------------------
class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    DATA = 'New Data';
    console.log(DATA);
  }
}

let stuend1 = new User('kishan', 'gmail.com');
// stuend1.viewData();
// console.log(stuend1);

let admin1 = new Admin('admin', 'a@gmail.com');
admin1.viewData();
admin1.editData();
console.log(admin1);
