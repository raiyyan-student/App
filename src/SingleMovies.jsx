import React, {useState, useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { API_URL } from './Context';

const SingleMovies = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState("");

    const getmovies = async (url) => {
      setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovies(data);
            } 
        } catch (error) {
          console.log(error);
        }
    }
    useEffect(() => {
        let timerOut = setTimeout(() => {
          getmovies(`${API_URL}&i=${id}`);    
        }, 800);

        return () => clearTimeout(timerOut);
    }, [id]);
    
    if(isLoading) {
      return (
        <div className='movie-section'>
          <div className='loading'>Loading...</div>
        </div>
      );
    }
  return (
    <div>
      <section className='movie-section'>
        <div className='movie-card'>
          <figure>
            <img src={movies.Poster} alt=''/>
          </figure>

          <div className='card-content'>
            <p className='title'>{movies.title}</p>
            <p className='card-text'>{movies.Released}</p>
            <p className='card-text'>{movies.Genre}</p>
            <p className='card-text'>{movies.imdbRating}</p>
            <p className='card-text'>{movies.Country}</p>
            <NavLink to='/' className='back-btn'>Go Back</NavLink>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleMovies