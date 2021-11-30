import React,{useState,useEffect} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../../Styling/Movies.module.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function Plays() {

    const [playList, setPlayList] = useState([]);

    useEffect(() => {
        Axios.post("http://localhost:3004/play/display_plays").then((response) => {
            if (response.data) {
                setPlayList(response.data);
                console.log(response.data);
            }

        })
    }, [])

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


    return (
        <div style={{ margin: 10, marginBottom: 80 }} className={styles.parent}>
            <div className={styles.parent__text}>
                <h1>Plays</h1>
                {/* <Link to="" className={styles.link}>See all</Link> */}
            </div>
            <div className={styles.movies_container}>
                <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {
                        playList?.map((url, index) => (
                            <>
                                <div >
                                    <img src={"http://localhost/BookMyShow/bookmyshow/public/images/" + playList[index].playImage} alt="Play" />
                                </div>
                                <div className={styles.movie_name}>
                                    <h3>{playList[index].playTitle}</h3>
                                </div>
                                <div className={styles.movie_type}>
                                    {playList[index].playCategory}
                                </div>
                            </>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
