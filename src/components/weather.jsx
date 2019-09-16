import React from 'react';
import WeatherCard from '../material-ui/WeatherCard';
import Cloud from '../assets/images/cloud.png';
import Night from '../assets/images/night-cloudy.png';
import Sun from '../assets/images/sun.png';


function weather() {
    const weatherValue = [
        { id:1, day: 'Monday', feh: 12, cel: 14, image: Cloud },
        { id:2, day: 'Tuesday', feh: 12, cel: 14, image: Night},
        { id:3, day: 'Wednesday', feh: 12, cel: 14, image: Sun},
        { id:4, day: 'Thursday', feh: 12, cel: 14},
        { id:5, day: 'Friday', feh: 12, cel: 14}
    ]
    return (
        <div>
            {weatherValue.map(value => <WeatherCard 
            key={value.id}
                dayIndex={value.day[0].toUpperCase} 
                day={value.day}
                feh={value.feh}
                cel={value.cel}
                avatar={value.image} /> )}
        </div>
    )
};

export default weather;
