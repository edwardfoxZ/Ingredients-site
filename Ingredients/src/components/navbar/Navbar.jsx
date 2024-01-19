import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <>
            <nav className="Navbar w-100 d-flex flex-row gap-5 fw-bold shadow fs-3 p-4" style={{backgroundColor:'#166117', height:'6rem'}}>
                <div>
                    <Link to='/' style={{color:'white'}} href="">Home</Link>
                </div>
                <div>
                    <Link to='/about' style={{color:'white'}} href="">About</Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar