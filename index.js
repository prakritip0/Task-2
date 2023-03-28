
import { listCategory } from "./api/category.js";
import chalk from "chalk";

import { askName, prompt } from "./commands/commands.js";



const main = async () => {
    const name = askName();

    if (name) {
        console.log(chalk.green(`Hello, ${name}. You can now enter a category to hear a joke.`));
        console.log(chalk.bgWhite("Please press 'c' if you aren't aware of our categories!!"));
    }
    while (true) {
        const command = prompt(">");

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


