const Student = {
  fullName: 'kishan kalavadiya',
  marks: 94.2,
  printMarks: function () {
    console.log('Marks :- ', this.marks);
  },
};

const Student2 = {};
Student2.__proto__ = Student;

// console.log(Student);
// console.log(Student.printMarks());
// console.log(Student.toString());
console.log(Student2.printMarks());
