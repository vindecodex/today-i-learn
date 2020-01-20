const printMyName = name => console.log(`Hi my name is ${name}`);
const add = (a,b) => console.log(a+b);
const subtract = (a,b) => console.log(a-b);

if (process.argv[2] === '--print-name') {
	printMyName(process.argv[3]);
	process.exit();
}
if (process.argv[2] === '--add') {
	// Datas are string we need to convert it to Number
	add(Number(process.argv[3]),Number(process.argv[4]));
	process.exit();
}
if (process.argv[2] === '--subtract') {
	subtract(Number(process.argv[3]),Number(process.argv[4]));
	process.exit();
}

// run this command with this options

// node run-fn-with-terminal.js --print-name "your name"

// or

// node run-fn-with-terminal.js --add 5 10

// or

// node run-fn-with-terminal.js --subtract 20 10

// Conclusion
// process.argv holds array of commands you declare in node and it always be string convert it to number if you want to do math.
