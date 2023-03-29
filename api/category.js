import axios from "axios";
import chalk from "chalk";

export const listCategories = async () => {
    try {
        const categoryData = await axios.get("https://api.chucknorris.io/jokes/categories");
        categoryData.data.forEach((category, i) => {
            console.log(chalk.green("[" + (i + 1) + "]") + " " + chalk.green(category));
        });
    } catch (error) {
        console.error;
    }
}
