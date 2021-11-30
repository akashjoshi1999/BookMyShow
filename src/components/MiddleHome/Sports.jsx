import React,{useEffect,useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../../Styling/Movies.module.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function Sports() {

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
    const [sportList, setSportList] = useState([]);

    useEffect(() => {
        Axios.post("http://localhost:3004/sport/display_sport").then((response) => {
            if (response.data) {
                setSportList(response.data);
                console.log(response.data);
            }

        })
    }, [])

    return (
        <div style={{ margin: 10, marginBottom: 80 }} className={styles.parent}>
            <div className={styles.parent__text}>
                <h1>Sports</h1>
                <Link to="" className={styles.link}>See all</Link>
            </div>
            <div className={styles.movies_container}>
                <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {
                        sportList?.map((url, index) => (
                            <>
                                <div >
                                    <img src={"http://localhost/BookMyShow/bookmyshow/public/images/" + sportList[index].sportImage} alt="Sport" />
                                </div>
                                <div className={styles.movie_name}>
                                    <h6>{sportList[index].name}</h6>
                                </div>
                                <div className={styles.movie_type}>
                                    {sportList[index].type}
                                </div>
                            </>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
