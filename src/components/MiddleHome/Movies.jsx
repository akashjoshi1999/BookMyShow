import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../../Styling/Movies.module.css';
import { useHistory,Link } from "react-router-dom";

export default function Movies() {

    const [movieList, setMovieList] = useState([]);
    const history = useHistory();

    useEffect(() => {
        Axios.post("http://localhost:3004/movie/display_movie").then((response) => {
            if (response.data) {
                setMovieList(response.data);
                console.log(response.data);
            }

        })
    }, [])

    const singleMove = movietitle => () => {
        history.push("/singlemovie", { mtitle: movietitle });
    }

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    console.log("list", movieList);
    return (
        <div style={{ margin: 10, marginBottom: 80 }} className={styles.parent}>
            <div className={styles.parent__text}>
                <h1>Movies</h1>
                <Link to="/movies" className={styles.link}>See all</Link>
            </div>
            <div className={styles.movies_container}>
                <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {
                        movieList.map((url, index) => (
                            <>
                                <div >
                                    <img src={"http://localhost/BookMyShow/bookmyshow/public/images/" + movieList[index].image} alt="Movies" onClick={singleMove(`${movieList[index].title}`)} />
                                </div>
                                <div className={styles.movie_name}>
                                    <h6>{movieList[index].title}</h6>
                                </div>
                                <div className={styles.movie_type}>
                                    {movieList[index].category}
                                </div>
                            </>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
