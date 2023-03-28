import chalk from "chalk";
import promptSync from "prompt-sync";
import { constantValues } from "../constants/consts.js";

export const prompt = promptSync();

export const askName = () => {
    console.log("\n \n " + chalk.green(constantValues.title) + "\n \n" + chalk.bgGreen(constantValues.description) + "\n\n" + constantValues.jokeCategories + chalk.red(constantValues.cKey) + "\n" + constantValues.backToStart + chalk.red(constantValues.gKey) + "\n" + constantValues.exitProgram + chalk.red(constantValues.xKey) + "\n");
    console.log(chalk.green("What is your name?"));
    const name = prompt(">>");
    return name;
}