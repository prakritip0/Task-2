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
    console.log("\n \n" + chalk.bgGreen(constantValues.description) + "\n\n" + constantValues.jokeCategories + chalk.red(shortcuts.see_joke_categories) + "\n" + constantValues.backToStart + chalk.red(shortcuts.go_back_to_start) + "\n" + constantValues.exitProgram + chalk.red(shortcuts.exit_project) + "\n" + constantValues.viewJokesDatabase + chalk.red(shortcuts.view_jokes_database) + "\n" + constantValues.askForHelp + chalk.red(shortcuts.ask_for_help) + "\n");
}

export const askName = () => {
    console.log(chalk.green("What is your name?"));
    const name = prompt(">>");
    finalData.name = name;
    return name;
}

const storeData = () => {

    const userDetails = JSON.stringify(finalData);
    fs.writeFileSync(`${__dirname}/../files/${finalData.name}.json`, userDetails, (err) => {
        if (err) {
            console.log("error")
            return
        }
        console.log("\n" + "Your jokes are saved on " + chalk.blue(finalData.name) + chalk.blue(".json") + ". Please enter " + chalk.blue("view") + " to view the file.");

    });

}
const readStoredData = () => {
    const storedData = fs.readFileSync(`${__dirname}/../files/${finalData.name}.json`, "utf-8");
    // const parsedStoredData = JSON.parse(storedData);
    console.log(chalk.green(storedData));
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
            case "v":
                readStoredData();
                break
            case "help":
                showWelcomeBanner();
                continue
            case "x":
                return
            // default:
            //     showWelcomeBanner();
        }

    }
}







