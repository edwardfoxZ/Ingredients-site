import axios from 'axios';
import { useState } from 'react';




const useFetchRecipe = () => {
    const [recipe , setRecipe] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = async (id) => {

        setLoading(true)
        setError(null)
        setRecipe(null)

        const reqOptions = {
          url: 'http://localhost:5000/api/ingredients',
          params: {
              search: searchTerm,  // Pass the search term as a query parameter
          },
        };
        if (id){
          reqOptions.params.id = id;
        }

        try {
            const response = await axios.get(reqOptions.url, {params: reqOptions.params});
            setRecipe(response.data)
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