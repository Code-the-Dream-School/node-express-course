console.log(__dirname)
console.log(__filename)
process.env.MY_VAR = "Hi there!";
console.log(process.env.MY_VAR)
// console.log(process.env.MY_VAR1)
setInterval(() => {
    console.log('hello world')
}, 1000);
