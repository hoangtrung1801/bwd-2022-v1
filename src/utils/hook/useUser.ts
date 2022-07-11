import { useDocument } from "swr-firestore-v9";
import User from "../types/User";

const useUser = (id: string) => {
    const { data, error } = useDocument<User>(`users/${id}`);
    return {
        user: data,
        isLoading: !error && !data,
        error: error,
    };
};

export default useUser;
