import axios from "axios";

export const fetchData = async (url: string) => {
    const result = await axios.get(url);
    return result.data;
};
