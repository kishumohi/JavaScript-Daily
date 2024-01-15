const Person = {
  firstname: 'john',
  lastname: 'kishan',
  id: 56,
  fullName: function () {
    return this.firstname + ' ' + this.lastname;
  },
};
console.log(Person.fullName());
