import chalk from "chalk";
import { askName, prompt, shortcutCommand } from "./commands/commands.js";
import { showAppTitle } from "./commands/commands.js";
import { showWelcomeBanner, createFileFolder } from "./commands/commands.js";



const main = () => {
    showAppTitle();
    showWelcomeBanner();
    createFileFolder();
    const name = askName();

    if (name) {
        console.log(chalk.green(`Hello, ${name}. You can now enter a category to hear a joke.`));
        console.log(chalk.bgWhite("Please press 'c' if you aren't aware of our categories!!"));
    }
    shortcutCommand();
}


main();




