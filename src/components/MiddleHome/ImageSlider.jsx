import React, { useState } from 'react';
// import styles from '../../Styling/Slider.module.css';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import { SliderData } from './SliderData';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const image = [
    "https://in.bmscdn.com/promotions/cms/creatives/1631025243018_basteachersdaycampaign_webshowcase_1240x300.jpg",
    "https://images.unsplash.com/photo-1543536448-1e76fc2795bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://in.bmscdn.com/promotions/cms/creatives/1628591224466_fnbgeneric.jpg"
]


export default function ImageSlider({ slides }) {

    // const [current, setCurrent] = useState(0);
    // const length = slides.length;

    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // }
    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }
    // if (!Array.isArray(slides) || slides.length <= 0) {
    //     return null;
    // }
    // console.log(current);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div style={{ padding: "5px 0px"}}>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["mobile"]} autoPlay infinite>
                {
                    image?.map((banner, index) => (
                        <div style={{ padding: "0px 15px"}} key={index+1}>
                            <img style={{ width: "100%", cursor: "pointer", borderRadius:"10PX",height: "350px" }} src={banner} alt="Advertisement banner" />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}
