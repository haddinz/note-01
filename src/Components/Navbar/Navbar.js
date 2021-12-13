import React, { useState, useEffect } from 'react'
import {
    Navbar,
    Nav,
    NavbarBrand,
    NavbarCol,
    NavItem,
    NavLink,
    NavIcon
} from "./Navbar.Style"
import Bars from "../svg/Bars.svg"


const Navbars = ({handleclick}) => {
    const [navbar, setNavbar] = useState(false)
    
    const changebackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changebackground)
    }, [])

    return (
        <Navbar>
            <Nav scroll={navbar}>
                <NavbarBrand scroll={navbar} activeClass="active" to="home" spy={true} smooth={true} offset={-60} duration={1000}>
                    <h2>Insinyur.Id</h2>
                </NavbarBrand>
                <NavIcon onClick={handleclick}>
                    <img src={Bars} />
                </NavIcon>
                <NavbarCol>
                    <NavItem>
                        <NavLink scroll={navbar} activeClass="active" to="home" spy={true} smooth={true} offset={-60} duration={1000}>Home</NavLink>
                        <NavLink scroll={navbar} activeClass="active" to="testimonial" spy={true} smooth={true} offset={-80} duration={1000}>Testimonial</NavLink>
                        <NavLink scroll={navbar} activeClass="active" to="project" spy={true} smooth={true} offset={-60} duration={1000}>Project</NavLink>
                        <NavLink scroll={navbar} activeClass="active" to="about" spy={true} smooth={true} offset={-60} duration={1000}>About</NavLink>
                        <NavLink scroll={navbar}
                        activeClass="active" to="contact" spy={true} smooth={true} offset={-60} duration={1000}> Contact Me</NavLink>
                    </NavItem>
                </NavbarCol>
            </Nav>
        </Navbar>
    )
}

export default Navbars
