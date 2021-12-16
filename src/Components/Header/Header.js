import React from 'react'
import Openbook from "../svg/Openbook.svg"
import { Headers, Box, BoxOne, BoxTwo, BoxFour, BoxThree, Head, Home, Label, Button} from "./Header.Style"
import Fade from 'react-reveal/Fade'
import { Link as Scroll } from 'react-scroll'


const Header = ({index}) => {
    return (
        <Headers id="home">
            <Box>
                <BoxOne></BoxOne>
                <BoxTwo></BoxTwo>
                <BoxThree></BoxThree>
                <BoxFour></BoxFour>
            </Box>
            <Head>
                <Home>
                    <h1>
                        <Fade bottom duration={1000}>
                            Frontend Designer <br />
                            makes Creative Ideas <br />
                            and Attractive Designs <br />
                            Made on Your Website
                        </Fade>
                    </h1>
                    <img src={process.env.PUBLIC_URL + "/images/asset/me2.png"} alt="header"/>
                </Home>
                <Label>
                    <p>
                        I will provide creative ideas for your website
                        <br />so that your customers get what you provide
                    </p>
                    <Button>
                        <Scroll activeClass="active" to="contact" spy={true} smooth={true} offset={-60} duration={1000}><img src={Openbook} alt="book"/></Scroll>
                    </Button>
                </Label>
            </Head>
        </Headers>
    )
}

export default Header




