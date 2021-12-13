import React from 'react'
import Openbook from "../svg/Openbook.svg"
import { Row, Col, ColImage, ColAbout, Button } from "./About.Style"
import Fade from 'react-reveal/Fade'
import { Link as Scroll } from "react-scroll"

const About = () => {
    return (
        <Row id="about">
            <h3>About Me</h3>
            <Col>
                <ColImage>
                    <Fade left>
                        <img src="./images/asset/me1.png" />
                    </Fade>
                </ColImage>
                <ColAbout>
                    <h2>
                        <Fade bottom >
                            Hello , I am Rudy Anugrah <br />
                            Freelance Designer with focus in UX/UI <br />
                            since 2018, I currently live in a small town in<br />
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
                    <Button>
                        <Scroll activeClass="active" to="contact" spy={true} smooth={true} offset={-60} duration={1000}><img src={Openbook} /></Scroll>
                    </Button>
                </ColAbout>
            </Col>
        </Row>
    )
}

export default About
