import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import MovieIcon from '@material-ui/icons/Movie';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SportsCricketIcon from '@material-ui/icons/SportsCricket';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import TheatersIcon from '@material-ui/icons/Theaters';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';


export const SidebarData = [
    {
        title: 'Home',
        icon: <HomeIcon />,
        link: '/admin'
    },
    {
        title: 'Users',
        icon: <GroupIcon />,
        link: '/admin/users'   
    },
    {
        title: 'Movies',
        icon: <MovieIcon />,
        link: '/admin/movies'   
    },
    {
        title: 'Events',
        icon: <EventAvailableIcon />,
        link: '/admin/event'   
    },
    {
        title: 'Plays',
        icon: <SportsEsportsIcon />,
        link: '/admin/play'   
    },
    {
        title: 'Sports',
        icon: <SportsCricketIcon />,
        link: '/admin/sport'   
    },
    {
        title: 'Offer',
        icon: <LocalOfferIcon />,
        link: '/admin/offer'   
    },
    {
        title: 'Theatre',
        icon: <TheatersIcon />,
        link: '/admin/theatre'   
    },
    {
        title: 'ContactUS',
        icon: <ContactPhoneIcon />,
        link: '/admin/contacts'   
    }
]
    
