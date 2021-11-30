import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '/var/www/html/BookMyShow/bookmyshow/src/Styling/Events.module.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function Events() {

    const [eventList, setEventList] = useState([]);

    useEffect(() => {
        Axios.post("http://localhost:3004/event/display_event").then((response) => {
            if (response.data) {
                setEventList(response.data);
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
        <div className={styles.parent}>
            <div className={styles.parent__text}>
                <h1>Events</h1>
                <Link to="/events" className={styles.link}>See all</Link>
            </div>
            <div className={styles.movies_container}>
                <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {
                        eventList?.map((url, index) => (
                            <>
                                <div >
                                    <img src={"http://localhost/BookMyShow/bookmyshow/public/images/" + eventList[index].image} alt="Movies" />
                                </div>
                                <div className={styles.movie_name}>
                                    <h6>{eventList[index].name}</h6>
                                </div>
                                <div className={styles.movie_type}>
                                    {eventList[index].place}
                                </div>
                            </>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
