import { useEffect, useState } from 'react'

const Usefetch = (url) => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setResponse(json);
            }
            catch (error) {
                setError(error)
            }
        };

        fetchData();
    }, [])

    return { response, error }
}

export default Usefetch