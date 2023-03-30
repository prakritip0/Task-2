import axios from "axios";
import chalk from "chalk";
import { finalData } from "../data/finalData.js";



export const getJoke = async (category, userName) => {
    const joke = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
    console.log(chalk.green(joke.data.value));
    finalData.joke.push = joke.data.value;

}

