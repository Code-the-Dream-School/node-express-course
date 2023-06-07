// execute this command in your command line before: export MY_VAR="Hi there!"
process.env['MY_VAR2'] = 'See you!';
console.log(__dirname);
console.log(process.env.MY_VAR);
console.log(__filename);
console.log(process.env.MY_VAR2);