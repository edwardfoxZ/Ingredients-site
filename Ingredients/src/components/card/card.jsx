import { useNavigate } from 'react-router-dom'
import './card.css'

export default function Card({recipe}) {

    const { thumbnail_url, name, topics, total_time_tier, id } = recipe;


    const navigate = useNavigate()

    const navigateToRecipePage = () => {
        navigate(`/recipe/${id}`)
    }

    return(
        <div onClick={navigateToRecipePage} className="Card Pointer d-flex flex-column shadow" style={{borderRadius:'30px', marginTop:'1rem'}}>
            <div>
                <img className='Img-card' style={{borderRadius:'30px', borderBottomRightRadius:'0', borderBottomLeftRadius: '0'}} src={thumbnail_url} alt="" />
            </div>
            <div className='d-flex flex-column p-3'>
                <p className='fs-5 fw-bold line_overflow'>{name}</p>
                <div className='d-flex flex-row justify-content-between'>
                    {topics.length > 0 ? <p className='p-2 text-white' style={{backgroundColor:'#166117', borderRadius:'25px'}}>{topics}</p> : null}
                    
                    {total_time_tier > 0 ? <p className='fs-5' style={{color:'#166117'}}>{total_time_tier} minutes</p> : null}
                </div>
            </div>
        </div>
    )
}
