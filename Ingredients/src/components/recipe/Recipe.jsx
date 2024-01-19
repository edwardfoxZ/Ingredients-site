import { useParams } from 'react-router-dom'
import useFetchRecipe from '../hooks/useFetchRecipe'
import { useEffect } from 'react'
import Ingredients from '../ingredients/ingredients'


export default function Recipe({recipes}) {

    const { id } = useParams()
    const [fetchData, {data , loading , error}] = useFetchRecipe()

    useEffect(() => {
        fetchData(id)
    } ,[])

    console.log({data , loading , error})

    return(
        <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center">
            <Ingredients/>
        </div>
    )
}