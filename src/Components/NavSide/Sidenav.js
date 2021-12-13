import React from 'react'
import { Row, Col, SideNav, SideLink, SideIcon} from "./Navside.Style"
import Times from "../svg/Times.svg"

const Sidenav = ({open , handleclick}) => {
    return (
        <Row open={open} onClick={handleclick}>
            <SideIcon onClick={handleclick}>
                <img src={Times}/>
            </SideIcon>
            <Col>
                <SideNav>
                <SideLink onClick={handleclick} activeClass="active" to="home" spy={true} smooth={true} offset={-60} duration={1000}>Home</SideLink>
                    <SideLink onClick={handleclick} activeClass="active" to="testimonial" spy={true} smooth={true} offset={-80} duration={1000}>Testimonial</SideLink>
                    <SideLink onClick={handleclick} activeClass="active" to="project" spy={true} smooth={true} offset={-60} duration={1000}>Project</SideLink>
                    <SideLink onClick={handleclick} activeClass="active" to="about" spy={true} smooth={true} offset={-60} duration={1000}>About</SideLink>
                    <SideLink onClick={handleclick} activeClass="active" to="contact" spy={true} smooth={true} offset={-60} duration={1000}> Contact Me</SideLink>
                </SideNav>
            </Col>
        </Row>
    )
}

export default Sidenav
