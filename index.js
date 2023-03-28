
import { listCategory } from "./api/category.js";
import chalk from "chalk";
// import promptSync from "prompt-sync";
// import { constantValues } from "./constants/consts.js";
import { askName, prompt } from "./commands/commands.js";



// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// rl.question('Welcome to Chuck Norris Jokes!! What is your name? \n',
//     (userInput) => {
//         console.log(chalk.bgBlue(`Hello, ${userInput}. What kind of Chuck Norris joke would you like to hear? \n`));
//         listCategory();
//     }

// )
// const prompt = promptSync();
const main = async () => {
    const name = askName();

    if (name) {
        console.log(chalk.green(`Hello, ${name}. You can now enter a category to hear a joke.`));
        console.log(chalk.bgWhite("Please press 'c' if you aren't aware of our categories!!"));
    }
    while (true) {
        const command = prompt(">");
        // console.log(command);
        switch (command) {
            case "c":
                await listCategory();
                continue
            case "x":
                return
        }
    }
}

main();


