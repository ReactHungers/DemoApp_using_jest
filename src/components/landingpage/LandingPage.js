import React from 'react';
import { Box } from 'rebass'
import {
  Hero, CallToAction
} from 'react-landing-page'
import bgImage from '../../assets/images/bg_image.jpg'
import logo from '../../assets/images/logo.jpeg'

const LandingPage = () => {
    return <React.Fragment>
        <Box>
            <Hero
                color="black"
                backgroundImage={bgImage}
            >
                <img src={logo} width="200" height="50" alt="qvantel_logo"/>
                <h5 style={{color: 'white', marginTop: '8px'}}>Digital-Native CRM</h5>
                <br/><br/>
                <CallToAction href="/home" mt={3}>Get Started</CallToAction>
                {/* <ScrollDownIndicator/> */}
            </Hero>
        </Box>
    </React.Fragment>
}

export default LandingPage