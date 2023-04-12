import { CircularProgress } from '@mui/material';
import useAxios from 'axios-hooks'
import './Home.css'
import CardFilme from '../../components/CardFilme';

function Home() {

  const [{data, loading, error}] = useAxios('https://api.themoviedb.org/3/trending/movie/week?api_key=182b68454ef718f9d52382e9098f21d0');

  if(loading) return <CircularProgress/>
  if(error)return <p>Error !</p>

  
  const filmes = data.results
  
  return (
    <div className="App">
      <h1>movies<span>+</span></h1>
      <h2>Top 20 movies trending this week:</h2>
      <section className='secaoFilmes'>
      {filmes.map(filme => <CardFilme filme={filme} />)}
      </section>
    </div>
  )
}

export default Home
