import React, { useState, useEffect } from 'react';
import "./Region.css";
import Axios from 'axios';

function Region() {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    console.log("myalphabet", alphabet);

    const [cinemalist, setCinemaList] = useState([]);

    useEffect(() => {
        Axios.post("http://localhost:3004/display_theater").then((response) => {
            if (response.data) {
                setCinemaList(response.data);
            }

        })
    }, [])


    const listfor = search => () => {
        Axios.post("http://localhost:3004/theatersearch", {
            tname: search,
        }).then((response) => {
            setCinemaList(response.data);
        });
    }
    return (
        <div>
            <div className="container-fluid header">
                <div className="row">
                    <div className="col-6 region">
                        <h6>Online Tickets → Cinema List</h6>
                        <h5>Region-wise Cinema List</h5>
                    </div>
                </div>
            </div>
            <div className="cinema-filters">
                <ul className="filters">
                    {alphabet.map((ele) => {
                        return (
                            <li className={"f_" + ele} onClick={listfor(`${ele}`)}>{ele}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="cinema-card">
                <div className="cinema-card-wrapper1">
                    {
                        cinemalist?.map((url, index) => (
                            <div>
                                <img className="card-img-top" src={"http://localhost/BookMyShow/bookmyshow/public/images/" + cinemalist[index].image} alt="" />
                                <div className="card-body">
                                    <p className="card-text">{cinemalist[index].t_name + " " + cinemalist[index].area + " " + cinemalist[index].city_name}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="cinema-desc">
                <h5>Sit Back, Relax and Enjoy a Stellar Cinematic Experience at Your Nearest Cinema</h5>
                <h6>Whether watching a classic film or turning out for the first day first show of
                    Shang-Chi and the Legend of the Ten Rings, there's something special about watching
                    movies on the big screen. No doubt, Movies are experienced best in the theatres.
                    And, there is no dearth of good cinemas in in Ahmedabad. From PVR: Acropolis,
                    Ahmedabad to Cinepolis: Ahmedabad One, PVR: Arved Transcube, Ahmedabad to SB Multiplex:
                    Agora Mall, Ahmedabad has it all. These movie theatres in in Ahmedabad always strive to
                    offer you a life-size cinematic experience.</h6>

                <div className="cinema-card">
                    <div className="cinema">
                        <h5>Your Movie, Your Cinema</h5>
                        <h6>We at BookMyShow understand your love for movies. Providing you an unmatched movie
                            experience is always our priority. With the list of all the upcoming movies in any
                            language – Hindi, English, Marathi, Tamil, Telugu, Kannada, Malayalam or even
                            Genre – Action, Comedy, Thriller, Drama, Romance, Animation or Crime, we offer you
                            ticketing for all the movies at the nearby thaetres in Ahmedabad. Whether it's a
                            multiplex or an iconic single screen theatre, you will find it listed at BookMyShow!</h6>
                    </div>
                    <div className="cinema">
                        <h5>Movies Are Best Experienced in the Theatre!</h5>
                        <h6>Nothing can beat the experience of watching a movie in a theatre. It's a different
                            and a special experience all-together. Having listed more than 100 theatres in your
                            Ahmedabad, BookMyShow is the ultimate destination for a movie buff to book tickets online.
                            After all, who understands your love for cinema better than us!</h6>
                    </div>

                    <div className="cinema">
                        <h5>BookMyShow – Your ultimate Entertainment Destination!</h5>
                        <h6>What's more! Along with offering you the ease of booking movie tickets online,
                            we give you all you need to keep up with the best of movies, while keeping you
                            entertained. From movie reviews and gossip to which movies to watch, you will
                            find it all here. You can also catch the trailers and official previews of the
                            upcoming movies under our new section, Videos and Trailers. So Ahmedabad,
                            catch movies on the go with BookMyShow!</h6>
                    </div>
                </div>

                <h6>Catch movies at a cinema near you with BookMyShow!!</h6>

            </div>

        </div>
    );
}

export default Region;
