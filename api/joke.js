import axios from "axios";
import chalk from "chalk";
import { finalData } from "../data/finalData.js";



export const getJoke = async (category, userName) => {
    try {
        const joke = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
        console.log(chalk.green(joke.data.value));
        finalData.joke = joke.data.value;
    } catch (error) {
        console.log(chalk.red("\n error fetching the joke"));
    }
}

