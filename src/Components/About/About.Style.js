import styled from "styled-components";

export const Row = styled.section`
    width: 100%;
    height: 800px;
    /* z-index: 2; */
    position: relative;
    display: grid;
    place-items: center;
    
    h3{
        position: absolute;
        left: 50%;
        top : 30px;
        transform: translate(-50%);
        font-weight: normal;
        font-size: 20px;
    }

    @media screen and (max-width: 768px){
        height: 650px;
        padding-bottom: 50px;
    }
`
export const Col = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ColImage = styled.div`
    width: 90%;
    height: 100%;
    display: grid;
    place-items: center;
    img{
        max-width: 100%;
        max-height: 100%;
    }

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const ColAbout = styled.div`
    width: 100%;
    height: 70%;
    position: relative;
`
export const Word = styled.div`
    height: 90%;
    width: 100%;
    padding: 20px;
    h2{
        margin-bottom: 20px;
        width: 90%;
        font-size: 2.2vw;
    }
    p{
        font-size: 16px;
        padding: 5px 0;
        width: 90%;
    }

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h2{
            width: 80%;
            font-size: 18px;
        }
        p{
            width: 80%;
        }
    }

    @media screen and (max-width: 500px){
        h2{
            width: 90%;
            font-size: 16px;
        }
        p{
            width: 90%;
            font-size: 14px;
        }
    }
`
export const AboutLink = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    margin-top: 20px;
`
export const Button = styled.button`
    position: relative;
    border-radius: 50% 50%;
    border: 2px solid #212121;
    padding: 40px 40px;
    cursor: pointer;
    transition: none.4s ease-in;
    z-index: 1;
    background-color: #F1F0EC;
    overflow: hidden;

    img{
        z-index: 1;
    }

    &::before{
        position: absolute;
        content: " ";
        z-index: -1;
    }

    &::after{
        position: absolute;
        content: " ";
        z-index: -1;
        height: 100%;
        left: -100%;
        top: 0;
        transform: skew(50deg);
        transition-duration: 0.6s;
        transform-origin: top left;
        width: 0;
        background: #ff96ad;
    }

    &:hover:after{
        height: 100%;
        width: 200%;
    }

    &:hover img{
        transform: scale(1.1);
    }

    @media screen and (max-width: 768px){
        padding: 35px 35px;
    }

    @media screen and (max-width: 500px){
        padding: 30px 30px;
    }

`