import { toast } from "react-toastify";
import { server } from "../../axios-config";
import { BASE_URL } from "../../constant";
import { GET_ALL_BLOG, GET_BLOG_BY_PUBLIC_ID, GET_LATEST_BLOG } from "../../constant/routes/blog";
import { toastOptions } from "../../constant/toast";

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

export const fetchBlogByPublicId = async (id) => {
    try {
        const { data } = await server.get(`${BASE_URL}${GET_BLOG_BY_PUBLIC_ID}`+id);

        return data;
    }
    catch (err) {
        console.log(err);
        toast?.error(err?.response?.data?.message || err?.message, toastOptions);
    }
};

export const fetchAllLatestBlogs = async (page = 1) => {
    try {
        const { data } = await server.get(`${BASE_URL}${GET_LATEST_BLOG}?page=${page}`);

        return data;
    }
    catch (err) {
        console.log(err);
        toast?.error(err?.response?.data?.message || err?.message, toastOptions);
    }
};