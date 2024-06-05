import { toast } from "react-toastify";
import { server } from "../axios-config";
import { BASE_URL } from "../constant";
import { GET_ALL_BLOG } from "../constant/routes/blog";
import { toastOptions } from "../constant/toast";

export const fetchAllBlogs = async (page = 1,) => {
    try {
        const { data } = await server.get(`${BASE_URL}${GET_ALL_BLOG}?page=${page}`);

        return data;
    }
    catch (err) {
        console.log(err);
        toast?.error(err?.response?.data?.message || err?.message, toastOptions);
    }
};