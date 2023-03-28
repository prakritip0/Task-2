import readline from "readline";
import { listCategory } from "./api/category.js";
import chalk from "chalk";
import promptSync from "prompt-sync";
import { constantValues } from "./constants/consts.js";



// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// rl.question('Welcome to Chuck Norris Jokes!! What is your name? \n',
//     (userInput) => {
//         console.log(chalk.bgBlue(`Hello, ${userInput}. What kind of Chuck Norris joke would you like to hear? \n`));
//         listCategory();
//     }

// )
const prompt = promptSync();
const callPrompt = () => {
    console.log("\n \n " + chalk.green(constantValues.title) + "\n \n" + chalk.bgGreen(constantValues.description) + "\n\n" + constantValues.jokeCategories + chalk.red(constantValues.cKey) + "\n" + constantValues.backToStart + chalk.red(constantValues.gKey) + "\n" + constantValues.exitProgram + chalk.red(constantValues.xKey) + "\n");
    console.log(chalk.green("What is your name?"))
    const name = prompt(">>");
    if (name) {
        console.log(chalk.green(`Hello, ${name}. You can now enter a category to hear a joke.`));
        console.log(chalk.bgWhite("Please press 'c' if you aren't aware of our categories!!"));
    }

}
callPrompt();


