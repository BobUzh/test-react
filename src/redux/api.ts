import axios from "axios";

const API_KEY = "b8300081a000a2e12bf76d615b9e80ba";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export const getMovies = async (page: number, lang: string) => {
    const res = await api.get(
        `movie/popular?api_key=${API_KEY}&language=${lang}&page=${page}`
    );

    return res;
};

export const getWishList = async (lang: string) => {
    const res = await api.get(`list/1?api_key=${API_KEY}&language=${lang}`);

    return res;
};

export const getAll = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

    return res.data;
};
