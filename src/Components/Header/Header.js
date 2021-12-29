import React from 'react'
import Openbook from "../svg/Openbook.svg"
import { Headers, Box, BoxOne, BoxTwo, BoxFour, BoxThree, Head, Home, Label, Button, ColLabel, ColHome } from "./Header.Style"
import Fade from 'react-reveal/Fade'
import { Link as Scroll } from 'react-scroll'


const Header = () => {
    return (
        <Headers id="home">
            <Box>
                <BoxOne></BoxOne>
                <BoxTwo></BoxTwo>
            </Box>
            <Head>
                <Home>
                    <ColHome>
                        <h1>
                            <Fade bottom duration={1000}>
                                Frontend Designer
                                makes Creative Ideas
                                and Attractive Designs
                                Made on Your Website
                            </Fade>
                        </h1>
                        <img src={process.env.PUBLIC_URL + "/images/asset/me2.png"} alt="header" />
                    </ColHome>
                </Home>
                <ColLabel>
                    <Label>
                        <p>
                            I will provide creative ideas for your website
                            <br />so that your customers get what you provide
                        </p>
                        <Button>
                            <Scroll activeClass="active" to="contact" spy={true} smooth={true} offset={-60} duration={1000}><img src={Openbook} alt="book" /></Scroll>
                        </Button>
                    </Label>
                </ColLabel>
            </Head>
        </Headers>
    )
}

export default Header




