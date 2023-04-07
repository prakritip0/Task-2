import axios from "axios";
import chalk from "chalk";
import PromptSync from "prompt-sync";
import { finalData } from "../data/finalData.js";
import https from "https";

const prompt = PromptSync();

export const listCategories = async () => {


    try {
        const categoryData = await axios.get("https://api.chucknorris.io/jokes/categories", { httpsAgent: new https.Agent({ keepAlive: true }) });
        categoryData.data.forEach((category, i) => {
            console.log(chalk.green("[" + (i + 1) + "]") + " " + chalk.green(category));
        });
        console.log("\n" + chalk.bgGreen("Please enter one of the above categories to hear a joke!"));

        const chosenCategory = prompt(">");
        if (chosenCategory !== "") {
            if (isNaN(Number(chosenCategory))) {
                finalData.category = chosenCategory;
                return chosenCategory;

            } else {
                finalData.category = categoryData.data[chosenCategory - 1];
                return categoryData.data[chosenCategory - 1];

            }
        } else {
            console.log(chalk.red("invalid category!!!"))
            return null
        }
    } catch (error) {
        console.error(error)
    }
}
