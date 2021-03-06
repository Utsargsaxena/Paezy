import React ,{useState} from 'react'
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroP,HeroBtnWrapper,HeroH1,ArrowForward,ArrowRight} from './HeroElements'
import { Button } from '../ButtonElement'
import Video from '../../videos/video.mp4'
const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover =() => {
        setHover(!hover)
    }
    return ( 
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'>
                </VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Digital Payments made Easy
                </HeroH1>
                <HeroP>
                    Sign up for a new account today.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='/signup' onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>
                        Get Started { hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
