import { useState } from "react"

const useToken = () => {
    const getToken = () => {
        return localStorage?.getItem('token');
    }

    const [token, setToken] = useState(getToken());

    const saveToken = (dataToken: string) => {
        setToken(dataToken);
        localStorage.setItem('token', dataToken);
    }

    return {
        token: getToken(),
        setToken: saveToken
    }
}

export default useToken;