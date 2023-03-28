import axios from "axios";

export const listCategory = async () => {
    const categoryData = await axios.get("https://api.chucknorris.io/jokes/categories");
    // console.log(categoryData.data);
    categoryData.data.forEach((category, i) => {
        console.log(`[${i + 1}] ${category}`);
    });
}
