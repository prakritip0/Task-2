import chalk from "chalk";
import promptSync from "prompt-sync";
import { constantValues } from "../constants/consts.js";
import { shortcuts } from "../constants/shortcut.js";
import { listCategories } from "../api/category.js";

export const prompt = promptSync();

const showWelcomeBanner = () => {
    console.log("\n \n " + chalk.green(constantValues.title) + "\n \n" + chalk.bgGreen(constantValues.description) + "\n\n" + constantValues.jokeCategories + chalk.red(shortcuts.see_joke_categories) + "\n" + constantValues.backToStart + chalk.red(shortcuts.go_back_to_start) + "\n" + constantValues.exitProgram + chalk.red(shortcuts.exit_project) + "\n" + constantValues.viewJokesDatabase + chalk.red(shortcuts.view_jokes_database) + "\n");
}

export const askName = () => {
    showWelcomeBanner();
    console.log(chalk.green("What is your name?"));
    const name = prompt(">>");
    return name;
}

export const shortcutCommand = async () => {
    while (true) {
        const shortCommand = prompt(">");
        switch (shortCommand) {
            case "c":
                await listCategories();
                continue
            case "x":
                return
        }

    }
}

