import {useState, useEffect} from 'react'
import Axios from 'axios'

export default url => {
    const baseUrl='https://conduit.productionready.io/api/';
    const [isLoading, setIsLoading] = useState(false);
    const [reponse, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});
    const doFetch = (options = {}) => {
        setOptions(options);
        setIsLoading(true);
    };

    useEffect(() => {
        if(!isLoading){
            return;
        }
        Axios(baseUrl+url, options).then(res =>{
            console.log('suc', res);
            setIsLoading(false);
            setResponse(res.data)
        }).catch(error => {
            console.log('error', error);
            setIsLoading(false);
            setError(error.response.data);
        })
    }, [isLoading])

    return [{isLoading, reponse, error}, doFetch];
}