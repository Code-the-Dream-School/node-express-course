// 3) utils.js

const person = (name) => {
  if (name !== "Milly" && name !== "Bunny") {
    console.log(`That's right, ${name} is the one who killed James`);
  } else {
    console.log(`${name} is not the person who killed James`);
  }
};

module.exports = person