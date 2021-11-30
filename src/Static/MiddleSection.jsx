import React,{useState} from 'react';
import Entertainment from '../components/MiddleHome/Entertainment';
import Events from '../components/MiddleHome/Events';
import ImageSlider from '../components/MiddleHome/ImageSlider';
import Movies from '../components/MiddleHome/Movies';
import Plays from '../components/MiddleHome/Plays';
import Sports from '../components/MiddleHome/Sports';

export default function MiddleSection() {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <ImageSlider/>
            <Movies/>
            <Entertainment/>
            <Events/>
            <Plays/>
            <Sports/>
        </div>
    )
}