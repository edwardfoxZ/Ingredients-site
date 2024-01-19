import Cardlist from '../card/cardlist'
import './landingPage.css'
import Header from '../header/header';
import Loading from '../assets/Loading.gif';
import { useEffect } from 'react';
import useFetchRecipes from '../hooks/useFetchRecipes';


export default function Landingpage()  {

    const [fetchData, {data, loading, error}] = useFetchRecipes()


    useEffect(() => {
        fetchData();
    } ,[])

    const handleSearch = (searchTerm) => {
        console.log('called', searchTerm)
        if(searchTerm) {
            fetchData(searchTerm);
        }
    }

    return(
        <>
            <Header handleSearch={handleSearch}/>
            {loading && <img className='d-flex mx-auto' style={{marginTop:'10rem'}} src={Loading} alt='Loading'/>}
            {data && <Cardlist recipes={data}/>}
            {error && <p className='d-flex text-danger fs-3 fw-bolder justify-content-center'>{error}</p>}
        </>
    )
}

