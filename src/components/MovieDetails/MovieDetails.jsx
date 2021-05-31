import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function MovieDetails(props) {
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch({type: 'FETCH_DETAILS'})
    })

    return (
        <div>
            <p>DEETS</p>
        </div>
    );   
}

export default MovieDetails;