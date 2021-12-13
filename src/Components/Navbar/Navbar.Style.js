import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll"

export const Navbar = styled.section`
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 100;
`
export const Nav = styled.div`
    position: relative;
    left: 50%;
    transform: translate(-50%);
    z-index: 100;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background-color: ${({scroll}) => (scroll ? '#212121' : 'tranparent')};
    transition: ease-in-out .3s;

    @media screen and (max-width : 768px){
        background-color: #212121;
    }
`
export const NavbarBrand = styled(LinkScroll)`
    color: ${({scroll}) => (scroll ? '#F1F0EC' : 'tranparent')};
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 10%;
    z-index: 1;
    @media screen and (max-width : 768px){
        color: #F1F0EC;
    }
`
export const NavIcon = styled.div`    
    position: absolute;
    right: 10%;
    height: 80px;
    z-index: 1;
    display: none;
    & img:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 768px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
export const NavbarCol = styled.nav`
    width: 100%;
    height: 80px;
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 10%;
`
export const NavItem = styled.li`
    width: 40%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavLink = styled(LinkScroll)`
    color: ${({scroll}) => (scroll ? '#F1F0EC' : '#212121')};
    font-family: "poppins";
    font-weight: medium;
    font-size: 18px;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        transform: scale(1.1);
    }
`
