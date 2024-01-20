import axios from "axios";
import { useState, useEffect } from "react";

const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: '0',
      size: '20',
      tags: 'under_30_minutes'
    },
    headers: {
      'X-RapidAPI-Key': '2fd7e699b5msh852ada5b65a16ddp155123jsn7ecaa147b6e3',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };

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

        try {
            const reqOptions = {...options}
            if (searchTerm){
                reqOptions.params.q = searchTerm;
              }
            const response = await axios.request(reqOptions);
            setRecipes(response.data.results)
            setLoading(false)

        } catch (err) {
            setError(err.message)
            setLoading(false)

        }
    };

    return [fetchData, {data: recipes, loading, error}]

}

export default useFetchRecipes