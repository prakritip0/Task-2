import chalk from "chalk";
import promptSync from "prompt-sync";
import { constantValues } from "../constants/consts.js";
import { shortcuts } from "../constants/shortcut.js";
import { listCategories } from "../api/category.js";
import { getJoke } from "../api/joke.js";
import * as fs from "fs";
import { finalData } from "../data/finalData.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const prompt = promptSync();

export const showAppTitle = () => {
    console.log("\n \n " + chalk.green(constantValues.title));
}

export const showWelcomeBanner = () => {
    console.log("\n \n" + chalk.bgGreen(constantValues.description) + "\n\n" + constantValues.jokeCategories + chalk.red(shortcuts.see_joke_categories) + "\n" + constantValues.exitProgram + chalk.red(shortcuts.exit_project) + "\n" + constantValues.viewJokesDatabase + chalk.red(shortcuts.view_jokes_database) + "\n" + constantValues.askForHelp + chalk.red(shortcuts.ask_for_help) + "\n");
}

export const askName = () => {
    console.log(chalk.green("What is your name?"));
    // const name = prompt(">>");
    // finalData.name = name;
    // return name;
    let name = '';
    while (!name) {
        name = prompt(">>");
    }
    finalData.name = name;
    return name;
}

const storeData = () => {
    const userDetails = JSON.stringify(finalData);
    fs.writeFileSync(`${__dirname}/../files/${finalData.name}.json`, userDetails, { flag: "a" })
    console.log("\n" + "Your jokes are saved on " + chalk.blue(finalData.name) + chalk.blue(".json") + ". Please enter " + chalk.blue("view") + " to view the file.");
}

const readStoredData = () => {
    const storedDataArray = [];
    const storedData = fs.readFileSync(`${__dirname}/../files/${finalData.name}.json`, "utf-8");
    const stringifiedStoredData = `${storedData}`;
    stringifiedStoredData.split("\n").forEach((singleOutputData) => {
        storedDataArray.push(JSON.parse(singleOutputData));
    })
    console.log(storedDataArray);
}


export const shortcutCommand = async () => {
    while (true) {
        const shortCommand = prompt(">");
        switch (shortCommand) {
            case "c":
                const category = await listCategories();
                await getJoke(category);
                storeData();
                break
            case "view":
                readStoredData();
                break
            case "help":
                showWelcomeBanner();
                break
            case "x":
                return
        }

    }
}
export const createFileFolder = () => {
    const fileExistence = fs.existsSync(`${__dirname}/../files`, "utf-8");
    if (!fileExistence)
        fs.mkdirSync("files");
}
