import axios from "axios";
import chalk from "chalk";
import PromptSync from "prompt-sync";
import { finalData } from "../data/finalData.js";

const prompt = PromptSync();

export const listCategories = async () => {
    let categoryData = {};
    try {
        categoryData = await axios.get("https://api.chucknorris.io/jokes/categories");
        categoryData.data.forEach((category, i) => {
            console.log(chalk.green("[" + (i + 1) + "]") + " " + chalk.green(category));
        });
        console.log("\n" + chalk.bgGreen("Please enter one of the above categories to hear a joke!"));

        const chosenCategory = prompt(">");
        if (isNaN(Number(chosenCategory))) {
            finalData.category = chosenCategory;
            return chosenCategory;

        } else {
            finalData.category = categoryData.data[chosenCategory - 1];
            return categoryData.data[chosenCategory - 1];

        }
    } catch (error) {
        console.error("\n" + chalk.red("error fetching category") + "\n");
    }
}
