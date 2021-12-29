import React from 'react'
import Openbook from "../svg/Openbook.svg"
import { Row, Col, ColImage, ColAbout, Word, Button, AboutLink } from "./About.Style"
import Fade from 'react-reveal/Fade'
import { Link as Scroll } from "react-scroll"
import { Box, BoxThree } from '../Header/Header.Style'

const About = () => {
    return (
        <Row id="about">
            <Box>
                <BoxThree></BoxThree>
            </Box>
            <h3>About Me</h3>
            <Col>
                <ColImage>
                    <Fade left>
                        <img src={process.env.PUBLIC_URL + "/images/asset/me1.png"} alt="me" />
                    </Fade>
                </ColImage>
                <ColAbout>
                    <Word>
                        <h2>
                            <Fade bottom >
                                Hello , I am Rudy Anugrah
                                Freelance Designer with focus in UX/UI
                                since 2018, I currently live in a small town in
                                Southeastern Hemisphere
                            </Fade>
                        </h2>
                        <p>
                            <Fade bottom>
                                Armed with the experience that I have experienced as a freelancer,
                                I finally realized that the meaning of a design is not only visual, but also
                                functional.
                            </Fade>
                        </p>
                        <p>
                            <Fade bottom>
                                Making clients surf the website for a long time with a sense of comfort, of course.
                            </Fade>
                        </p>
                        <p>
                            <Fade bottom>
                                The combination of good visuals and convenient functions
                                unconsciously our clients will stop feeling a moment and then say WAW this is amazing
                            </Fade>
                        </p>
                    </Word>
                    <AboutLink>
                        <Button>
                            <Scroll activeClass="active" to="contact" spy={true} smooth={true} offset={-60} duration={1000}><img src={Openbook} /></Scroll>
                        </Button>
                    </AboutLink>
                </ColAbout>
            </Col>
        </Row>
    )
}

export default About
