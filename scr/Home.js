
import React from "react";
import "./Home.css"
import Product from "./Product";
import { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
// import './transtyle.css'




function Home() {
    const pages = [
        ({ style }) => <animated.div style={{ ...style,background: 'lightyellow'  }}>
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/deals/trafficdrivers/Q4_2020_HolidayDeals_TrafficDrivers_Desktop_Hero_v1-b_1500x600_1x._CB417424793_.jpg" alt=""/></animated.div>,
        ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>
            <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ODc1YjFhOTgt/ODc1YjFhOTgt-ODcyNWIzMTEt-w1500._CB414699619_.jpg" alt=""/></animated.div>,
        ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}><img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/ACQ/Gateway/HolidayNonPromo/DV5/US-EN_100120_HOLNonPromo_ACQ_GW_Hero_D_1500x600_CV4_2._CB415751495_.jpg" alt=""/></animated.div>,
        ({ style }) => <animated.div style={{ ...style, background: 'None' }}><img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/deals/trafficdrivers/Q4_2020_HolidayDeals_TrafficDrivers_Desktop_Hero_v1_1500x600._CB417563015_.jpg" alt=""/></animated.div>,
    ]
    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state+1)%3 ), [])
    const transitions = useTransition(index, p => p, {
        from: { opacity: 1, transform: 'translate3d(100%,0,0px)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    })

    return (
        // BEM
        <div className="home">
            <div className='home__container'>
                <div className="simple-trans-main" onClick={onClick}>
                    {transitions.map(({ item, props, key }) => {
                        const Page = pages[item]
                        return <Page key={key} style={props} />
                    })}
                </div>
                {/*<img*/}
                {/*    className="home__image"*/}
                {/*    src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ODc1YjFhOTgt/ODc1YjFhOTgt-ODcyNWIzMTEt-w1500._CB414699619_.jpg'*/}
                {/*    alt=''*/}
                {/*/>*/}

                <div  className='home__row'  >

                        <Product id ='123456'
                                 title='Colgate Total Whitening Toothpaste with Stannous Fluoride and Zinc (4 Pack)'
                                 price={29.99}
                                 image='https://m.media-amazon.com/images/I/61dMN7Q9L4L._AC_SL260_.jpg'
                                 rating={4}
                        />


                    <Product id ='523423'
                             title='All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal'
                             price={49.99}
                             image='https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_UL320_SR320,320_.jpg'
                             rating={5}
                    />

                </div>

                    {/* Product*/}
                    {/* Product*/}


                <div className='home__row'>
                    <Product id ='31235'
                             title='Fire TV Stick 4K streaming device with Alexa Voice Remote | Dolby Vision '
                             price={29.99}
                             image='https://images-na.ssl-images-amazon.com/images/I/51CgKGfMelL._AC_UL320_SR320,320_.jpg'
                             rating={5}
                    />
                    <Product id ='3214235'
                             title='Wyze Cam 1080p HD Indoor WiFi Smart Home Camera with Night Vision, 2-Way Audio'
                             price={19.99}
                             image='https://images-na.ssl-images-amazon.com/images/I/61B04f0ALWL._AC_UL320_SR320,320_.jpg'
                             rating={4}
                    />
                    <Product id ='32135123'
                             title='Wyze Cam Pan 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera '
                             price={29.99}
                             image='https://images-na.ssl-images-amazon.com/images/I/31dz6wCIWML._AC_UL320_SR320,320_.jpg'
                             rating={3}
                    />
                </div>

                <div className='home__row'>
                    <Product id ='232133'
                             title="Carhartt Men's Acrylic Watch Hat A18"
                             price={9.99}
                             image='https://images-na.ssl-images-amazon.com/images/I/91h%2B3yF600L._AC_UL320_SR268,320_.jpg'
                             rating={4}
                    />
                    {/* Product*/}
                    {/* Product*/}
                </div>

            </div>
        </div>
    );
}

export default Home;