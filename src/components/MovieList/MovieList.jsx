import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useHistory} from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const goMovieDetails = (movieId) =>{
        history.push(`/details/${movieId}`)
    }
    const goToAdd = () =>{
        history.push('/add_movie')
    }
    return (
        <main>
            <h1>MovieList</h1>
            <h2 onClick={()=>goToAdd()}>Add A Movie</h2>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} onClick={()=>goMovieDetails(movie.id)}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;