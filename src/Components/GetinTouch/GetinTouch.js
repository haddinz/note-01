import React from 'react'
import {
    Row,
    Col,
    SubColloum,
    LinkColloum,
    ColLink,
    AlternatifLink,
    SocialLink,
    ColSvg,
    Copyright
} from "./GetinTouch.Style"
import Behance from "../svg/Behance.svg"
import dribbble from "../svg/dribbble.svg"
import github from "../svg/github.svg"
import pinterest from "../svg/pinterest.svg"

const GetinTouch = () => {
    return (
        <Row>
            <Col>
                <SubColloum>
                    <h1>Get In Touch</h1>
                    <h3>Based In KoutaLauma, Working WorldWide <br />
                        GT Local Time : 07:00 AM - 21:00 PM
                    </h3>
                </SubColloum>
                <LinkColloum>
                    <ColLink>
                        <h3>Alternatif Link</h3>
                        <AlternatifLink activeClass="active" to="home" spy={true} smooth={true} offset={-60} duration={1000}>Home</AlternatifLink>
                        <AlternatifLink activeClass="active" to="testimonial" spy={true} smooth={true} offset={-60} duration={1000}>Testimonial</AlternatifLink>
                        <AlternatifLink activeClass="active" to="project" spy={true} smooth={true} offset={-60} duration={1000}>Project</AlternatifLink>
                        <AlternatifLink activeClass="active" to="about" spy={true} smooth={true} offset={-60} duration={1000}>About Me</AlternatifLink>
                        <AlternatifLink activeClass="active" to="contact" spy={true} smooth={true} offset={-60} duration={1000}>Contact</AlternatifLink>
                    </ColLink>
                    <ColLink>
                        <h3>Social Link</h3>
                        <SocialLink><a href="https://facebook.com">Facebook</a></SocialLink>
                        <SocialLink><a href="https://instagram.com">Instagram</a></SocialLink>
                        <SocialLink><a href="https://twitter.com">Twitter</a></SocialLink>
                        <SocialLink><a href="https://youtube.com">Youtube</a></SocialLink>
                    </ColLink>
                </LinkColloum>
                <SubColloum>
                    <h3>Also You Can Find Me</h3>
                    <ColSvg>
                        <a href="https://dribbble.com"><img src={dribbble}/></a>
                        <a href="https://behance.com"><img src={Behance}/></a>
                        <a href="https://pinterest.com"><img src={pinterest}/></a>
                        <a href="https://github.com"><img src={github}/></a>
                    </ColSvg>
                </SubColloum>
                <Copyright>
                    <p>Copyright &copy; 2021 Insinyur. All Right Reserved</p>
                </Copyright>
            </Col>
        </Row>
    )
}

export default GetinTouch
