import useAxios from 'axios-hooks';
import { Link, useNavigation, useParams } from 'react-router-dom';
import '../detalhes/Detalhes.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Detalhes(){
   const {id} = useParams()
   const url = `https://api.themoviedb.org/3/movie/${id}?api_key=182b68454ef718f9d52382e9098f21d0&language=pt-BR`;
   const [{data,loading, error}] = useAxios(url)
   if(loading) return (<h2>Carregando...</h2>)
   const urlImage = "https://image.tmdb.org/t/p/w185/";
   const filme = data;
    return(
        <>
        <Link to={'/'}><span className="back"><ArrowBackIcon fontSize="x-small"></ArrowBackIcon>Voltar</span></Link>
         <div className="container">
            <div className="card_details">
                <img
                    src={urlImage + filme.poster_path}
                    className = 'poster_details'
                />
                    <div className='text'>
                        <h1>{filme.title}</h1>
                        <p className="details-p">{filme.overview}
                        </p>
                        <p className="details-score"><span className="score">Score </span>{filme.vote_average}</p>
                        <p className="release_date"><span className="date_span">Release date </span>{new Date(filme.release_date).toLocaleDateString('en-GB')}</p>
                    </div>
            </div>
        </div>
        </>
       
    )
}

export default Detalhes