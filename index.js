const { student1 } = require("./information");

let cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hi, I'm ${student1.firstName} from ${student1.campus} campus`,
    e: "oO",
    T: "U ",
  })
);
