import { useState } from "react"


export default function Header({handleSearch}) {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSearchClick = () => {
        handleSearch(searchTerm)
        setSearchTerm('')
    }

    return (
    <div className="d-flex flex-column w-100 h-75">
        <div style={{width:'70%'}} className='landing-page d-flex mx-auto gap-4'>
            <div className='d-flex flex-column'>
                <div className='d-flex fw-bolder' style={{fontSize:'70px'}}>
                    <p style={{color:'#2a433a'}}>Look for <p style={{color:'#e4be6d', display:'inline'}}>BANGER</p> <p style={{color:'#2a433a'}}>Food</p></p> 
                </div>
                <p className='fs-4' style={{inlineSize:'95%', fontWeight:'400'}}>Look for opportunities to take your time and pick our delicious, one must say, Banger food recipes to make your life even more colorful!</p>
                <div className='w-100 h-100 d-flex flex-row mt-5 gap-3 align-items-center'>
                    <input type="search" className='form-control' placeholder='Find your Ingredients'
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                    <button
                     onClick={handleSearchClick}
                     className='btn btn-success fs-4 fw-bold' style={{width:'25%', height:'40%',backgroundColor:'#166117', borderRadius:'25px'}}>Search</button>
                </div>
            </div>

            <div className='d-flex'>
                <img style={{width:'900px', borderRadius:'40px'}} src="https://www.hotelphotographers.eu/wp-content/uploads/2015/11/Food-photo-3-1200x675.jpg" alt="" />
            </div>  
        </div>

    </div>
    )
}