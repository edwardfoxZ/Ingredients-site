import axios from "axios";
import { useState, useEffect } from "react";


const useFetchRecipes = () => {
    
    const [recipes , setRecipes] = useState(null);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        fetchData();
    },[])


    const fetchData = async (searchTerm) => {

        setLoading(true)
        setError(null)
        setRecipes(null)

        const reqOptions = {
          url: 'http://localhost:5000/api/ingredients',
          params: {
              search: searchTerm,  // Pass the search term as a query parameter
          },
        };

        if (searchTerm){
          reqOptions.params.name = searchTerm;
        }

        try {
            const response = await axios.get(reqOptions.url, { params: reqOptions.params });
            setRecipes(response.data.ingredients)
            setLoading(false)
            setError(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)

        }
    };

    return [fetchData, {data: recipes, loading, error}]

}

export default useFetchRecipes