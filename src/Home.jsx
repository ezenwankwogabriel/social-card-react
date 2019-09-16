import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import navImage from './assets/images/1500x500.jpeg';
import twitterImage from './assets/images/twitter.jpg'
import WeatherCard from './material-ui/WeatherCard'
import Weather from './components/weather'

class Home extends Component {
    render() {
        const navImageStyle = {
            textAlign: 'center',
            margin: '10px 0px',
            position: 'relative'
        }
        const imageStyle = {
            width: '100%'
        }
        const buttonDivStyle = {
            float: 'right'
        }
        const twitterStyle = {left: '10px',borderRadius: '50%', width: '40%', position: 'relative', bottom: '80px'}
        return (
            <div className="container">
                <div style={navImageStyle}>
                    <Weather/>
                    <img style={imageStyle} src={navImage} alt=""/>
                    <div style={{position: 'absolute', textAlign: 'left'}}>
                        <img style={twitterStyle} src={twitterImage} alt=""/>
                    </div>
                </div>
                <div>
                    
                    <span  style={buttonDivStyle}>
                        <Button variant="contained" color="primary">Edit Profile</Button>
                    </span>
                </div>
                <br/>
                <br/>
                <br/>
                <div style={{fontWeight: 600, fontSize: 'larger'}}>EZENWANKWO GABRIEL</div>
                <div style={{lineHeight: 0.5, fontWeight: 200, marginBottom: '10px'}}>@dagabangell</div>
                <div style={{fontWeight: 400}}>Software Engineer | Security Analyst</div>
                <div>Lagos, NigeriaBorn February 20, 1993. Joined April 2011</div>
                <div><span style={{fontWeight: 'bold'}}>328</span> Following  <span style={{fontWeight: 'bold'}}>217</span> Followers</div>
            </div>
        )
    }
}

export default Home;
