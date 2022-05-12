import { useState } from "react"

const useToken = () => {
    const getToken = () => {
        return localStorage?.getItem('token');
    }

    const [token, setToken] = useState(getToken());

    const saveToken = (dataToken: string) => {
        localStorage.setItem('token', JSON.stringify(dataToken));
    }

    return {
        token,
        setToken: saveToken
    }
}

export default useToken;