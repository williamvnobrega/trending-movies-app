import {useState} from 'react';
import './CardFilme.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';

function CardFilme({filme}){

    const [favoritado, setFavoritado] = useState(false);
    const urlImage = "https://image.tmdb.org/t/p/w185/";
    function favoritar(){
        setFavoritado(!favoritado)
    }

    return(
        <div className='container'>
            <div className='CardFilme'>
                <div className="data">
                    
                        <img 
                        src={urlImage+filme.poster_path}
                        alt={`poster do filme ${filme.title}`}
                        className='poster'
                        />
                    <span className="icon">
                        {favoritado? 
                                <FavoriteIcon fontSize="small" className="favorite" onClick={favoritar}/> :
                                <FavoriteBorderIcon fontSize="small" className="favorite" onClick={favoritar}/>  
                            }
                    </span>
                    
                    <Link to={'/movie/'+ filme.id} state={filme}>
                        <p>{filme.title}</p>
                    </Link>
                    

                    <span className="score">
                    Score: {filme.vote_average.toFixed(1)}
                    </span>
                    
                    
                </div>
            </div>
        </div>

    )
}

export default CardFilme