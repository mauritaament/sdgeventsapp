import React from 'react';
import GoldenGateBridge from './GoldenGateBridge.jpg'

const cardContainer={
    position: 'relative',
    textAlign: 'center',
    color: 'white'

}


const subTextStyle={
    position: 'absolute',
    top: '8px',
    left: '16px',
    fontWeight: '700',
}

const headerTextStyle={
    position: 'absolute',
    top: '20px',
    left: '16px',
    fontWeight: '5000'
}

const backgroundImg={
    width: '100%',
    height: '100px'
}

export function CityLocationCard({city}){

    return(
            <div style={cardContainer}>
            <img src={GoldenGateBridge} style={backgroundImg} />
                <div style={subTextStyle}>LOCATION</div>
                <div style={headerTextStyle}><h1>{city}</h1></div>

            </div>
    )
}