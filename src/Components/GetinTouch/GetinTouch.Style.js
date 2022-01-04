import styled from "styled-components";
import { Link } from "react-scroll";

export const Row = styled.section`
    width: 100%;
    height: 750px;
    position: relative;
    z-index: 1;
    background-color: #212121;
`
export const Col = styled.div`
    width: 80%;
    height: 100%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
`
export const SubColloum = styled.div`
    margin: 50px 0;
    color: #fff;
    h1{
        font-size: 82px;
        font-weight: normal;
    }
    h3{
        font-size: 20px;
        font-weight: normal;
    }
    @media screen and (max-width: 748px){
        h1{
            font-size: 72px;
        }
        h3{
            font-size: 18px;
        }
    }
    @media screen and (max-width: 500px){
        h1{
            font-size: 46px;
        }
        h3{
            font-size: 16px;
        }
    }
`
export const LinkColloum = styled.div`
    display: flex;
    width: 400px;
    color: white;
    justify-content: space-between;
    margin-top: 80px;

    @media screen and (max-width: 500px){
        width: 90%;
    }
`
export const ColLink = styled.div`
    line-height: 30px;
    display: flex;
    flex-direction: column;
    h3{
        font-size: 20px;
        font-weight: normal;
    }
    @media screen and (max-width: 748px){
        h3{
            font-size: 18px;
        }
    }
`
export const AlternatifLink = styled(Link)`
    font-family: "Nunito-Sans";
    font-size: 16px;
    font-weight: normal;
    color: #fff;
    text-decoration: none;
    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 748px){
        font-size: 14px;
    }
`
export const SocialLink = styled.li`
    font-family: "Nunito-Sans";
    font-size: 16px;
    font-weight: normal;
    list-style: none;
    a{
        text-decoration : none;
        color: #fff;
        list-style: none;
    }

    @media screen and (max-width: 748px){
        font-size: 14px;
    }
`
export const ColSvg = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 220px;
    a{
        margin-top: 5px;
    }
`
export const Copyright = styled.div`
    width: 100%;
    border-top: 1px solid #707070;
    display: grid;
    place-items: center;
    
    p{
        margin-top: 30px;
        color: #fff;
        font-size: 12px;
    }

    @media screen and (max-width: 500px){
        p{
            font-size: 10px;
        }
    }
`