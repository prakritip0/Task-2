import axios from "axios";
import chalk from "chalk";
import { finalData } from "../data/finalData.js";



export const getJoke = async (category, userName) => {
    const joke = await axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
    console.log(joke.data.value);
    finalData.joke = joke.data.value;

}

