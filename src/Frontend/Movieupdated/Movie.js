import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { FaShareAlt } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import './cast.css'

export default function Movie() {
    const [moviedetail, setmoviedetail] = useState([])
    const location = useLocation();
    const movie_title = location.state.mtitle;
    console.log("null hai",movie_title);
    const [castData, setcastData] = useState([]);
    const IMG_API = "https://image.tmdb.org/t/p/w500/";

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=a8313e68c0da8d4303e72bd1abdd3189&language=en-US&query=${movie_title}&page=1&include_adult=false`)
            .then((res) => res.json())
            .then((result) => {
                const TMDBid = result.results[0].id;
                return fetch(`https://api.themoviedb.org/3/movie/${TMDBid}/credits?api_key=a8313e68c0da8d4303e72bd1abdd3189`);
            })
            .then((res) => res.json())
            .then((result) => {
                setcastData(result.cast);
            })
            .catch((error) => {
                this.setState({ error });
            });


        Axios.post('http://localhost:3004/movie/movie_details', {
            movietitle: movie_title,
        }).then((response) => {
            if (response) {
                setmoviedetail(response.data);
            }
            else {
                console.log("not connnnn");
            }

        })

    }, [])
    return (
        <>
            <div className="movie-details">
                {
                    moviedetail.map((movie) => {
                        console.log(movie);
                        const photo = "http://localhost/BookMyShow/bookmyshow/public/images/" + movie.backimage;
                        console.log(movie.backimage);

                        return (
                            <div className="back">
                                <img className="BkgImg" src={photo} />
                                <div className="main">
                                    <button className="share"><FaShareAlt />Share</button>
                                    <b><p className="text">{movie.title}</p></b>
                                    <p className="para">79% 29.7K ratings</p>
                                    <p className="p1">2h 10m
                                        •
                                        Action
                                        ,
                                        Thriller
                                        •
                                        UA
                                        •
                                        19 Aug, 2021</p>
                                    <button className="dbtn">{movie.movie_type}</button>
                                    <button className="dbtn">{movie.lang}</button>
                                    <div className="bookbtn">
                                        <button className="book">Book Ticket</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>

            {moviedetail.map((movie) => {
                return (
                    <div className="about">
                        <h1>About The Movie</h1>
                        <p>{movie.about}</p>

                    </div>
                )
            })}


            <div className="cast">
                <h1>Cast</h1>
                <div className="cast-list">


                    {castData.map((val) => {
                        return (
                            <div className="cast">
                                <img src={IMG_API + val.profile_path} alt='bell' className='cast-img-top' />
                                <div className='cast-body'>
                                    <h1>{val.id}</h1>
                                    <h4 className='cast-title'>{val.original_name}</h4>
                                    <h5 className='cast-head2'>{val.known_for_department}</h5>
                                    <h6 className='cast-head1'>{val.character}</h6>
                                </div>
                            </div>

                        );
                    }
                    )}
                </div>
            </div>
        </>

    )
}