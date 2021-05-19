// LEARNING JSON

/*
let Ball = {
  color: "Black",
  size: 5,
  bounce: false,
  setDrop: function () {
    this.bounce = true;
  },
};

console.log(Ball);
*/

// EXAMPLE #2
/*
const Usuario = {
  name: "Fernando",
  age: 36,
  email: "info@mail.com",
};

document.write("<p>" + Usuario.name + "</p>");
document.write("<p>" + Usuario.age + "</p>");
document.write("<p>" + Usuario.email + "</p>");
*/

// JS DESTRUCTURING

const { name, age, email } = {
  name: "Fernando",
  age: 36,
  email: "info@mail.com",
};

document.write("<p>" + name + "</p>");
document.write("<p>" + age + "</p>");
document.write("<p>" + email + "</p>");
