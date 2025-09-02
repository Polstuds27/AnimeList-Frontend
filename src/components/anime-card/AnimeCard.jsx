import './anime-card.css';
import {Link} from "react-router-dom"

function AnimeCard(props){

    return(
        <>  
        <Link to="/AnimeInfo" className='anime-link'>
            <div className="card-container">
                <img src={props.image} alt="" className='anime-img'/>
                <h2 id='title'>{props.title}</h2>
            </div>
        </Link>
        </>
    );
}

export default AnimeCard;