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
    } catch (error) {
        console.error;
    }
    console.log("\n" + chalk.bgGreen("Please enter one of the above categories to hear a joke!"));
    const chosenCategory = prompt(">");
    // console.log(Number(chosenCategory));
    if (isNaN(Number(chosenCategory))) {
        finalData.category.push(chosenCategory);
        return chosenCategory;

    } else {
        finalData.category.push(categoryData.data[chosenCategory - 1]);
        return categoryData.data[chosenCategory - 1];

    }


    // return chosenCategory;
}
