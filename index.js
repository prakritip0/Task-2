const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Welcome to Chuck Norris Jokes!! What is your name? \n',
    (userInput) => {
        console.log(`Hello, ${userInput}, What kind of Chuck Norris joke would you like to hear? \n`);

    }
)