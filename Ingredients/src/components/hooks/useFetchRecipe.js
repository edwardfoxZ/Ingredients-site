import axios from 'axios';
import { useState } from 'react';


const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
    params: {id: '8138'},
    headers: {
      'X-RapidAPI-Key': '2fd7e699b5msh852ada5b65a16ddp155123jsn7ecaa147b6e3',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};


const useFetchRecipe = () => {
    const [recipe , setRecipe] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = async (id) => {

        setLoading(true)
        setError(null)
        setRecipe(null)

        try {
            const reqOptions = {...options}
            reqOptions.params.id = id;
            const response = await axios.request(reqOptions);
            setRecipe(response.data.ingredients)
            setLoading(false)
            setError(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }
    };

    return [fetchData, {data: recipe, loading, error}]
}


export default useFetchRecipe