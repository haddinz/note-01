import { Link } from "react-scroll";
import styled from "styled-components";

export const Row = styled.section`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100vh;
    background-color: #212121;
    transition: all 0.3s ease-in-out;
    left: 0;
    top: ${({open}) => (open ? '0' : '-110%')};
    opacity: ${({open}) => (open ? '100%' : '0')};
`
export const Col = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-content: center;
    position: relative;
`
export const SideIcon = styled.div`
    position: relative;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    img{
        position: absolute;
        right: 10%;
    }
    img:hover{
        cursor: pointer;
    }
`
export const SideNav = styled.ul`
    display: flex;  
    flex-direction: column;
    text-align: center;
    justify-content: center;
    list-style: none;
    height: 50%;
`
export const SideLink = styled(Link)`
    margin-bottom: 30px;
    font-size: 18px;
    font-family: "poppins";
    font-weight: medium;
    color: #F1F0EC;
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`