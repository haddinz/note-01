import styled from "styled-components";

export const Headers = styled.section`
    width: 100%;
    height: 790px;
    z-index: 99;
`
export const Box = styled.div`
    width: 100%;
    height: 650vh;
    position: relative;
    background-color: #DDDBD7;
    &:after{
        position: absolute;
        content: "";
        height: 100%;
        width: 100%;
        backdrop-filter: blur(70px);
    }
`
export const BoxOne = styled.div`
    height: 100%;
    width: 100%;
    background-color: #F1F0EC;
    position: absolute;
`
export const BoxTwo = styled.div`
    position: absolute;
    height: 350px;
    width: 350px;
    background-color: #D3BC8A;
    top: 80px;
    left: 100px;
    border-radius: 50%;
    animation: animation linear 20s infinite alternate;
    animation-delay: 0.3s;

    @media screen and (max-width : 748px){
        display: none;
    }
`
export const BoxThree = styled.div`
    position: absolute;
    height: 100px;
    width: 100px;
    background-color: #5F61A0;
    right: 20px;
    top: 650px;
    border-radius: 50%;
    animation: animation1 10s infinite alternate;

    @media screen and (max-width : 748px){
        display: none;
    }
`
export const BoxFour = styled.div`
    position: absolute;
    height: 300px;
    width: 300px;
    background-color: #D3BC8A;
    top: 50%;
    left: 0;
    border-radius: 48%;
    animation: animation2 10s infinite alternate;

    @media screen and (max-width : 748px){
        display: none;
    }
`

export const Head = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 150px;
    z-index: 2;
`
export const Home = styled.div`
    width: 100%;
    height: 100%;
    & h1{
        font-size: 92px;
        color: #212121;
        position: absolute;
        left: 10%;
        top: 25px;
        z-index: 2;
        word-spacing: 10px;
        font-weight: normal;
        line-height: 60px;

    @media screen and (max-width: 748px){
        top: 200px;
        left: 10%;
        font-size: 52px;
        line-height: 35px;
        text-align: center;
        }
    }
    & img{
        position: absolute;
        right: 130px;
        opacity: 0.2;
        width: 400px;
        top: -50px;
        min-height: 200px;
        @media screen and (max-width: 748px){
            width: 300px;
            right: 10%;
            top: 20px;
            right: 150px;
        }
    }
`
// export const H1 = styled.h1`
//     font-size: 92px;
//     color: #212121;
//     position: absolute;
//     left: 10%;
//     top: 25px;
//     z-index: 2;
//     word-spacing: 10px;
//     font-weight: normal;

//     @media screen and (max-width: 748px){
//         top: 85px;
//         left: 10%;
//         text-align: left;
//         font-size: 62px;
//         word-spacing: 0;
//         line-height: 75px;
//     }
// `
export const Label = styled.div`
    position: absolute;
    left: 200px;
    bottom: 25px;
    width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & p{
        color: #000;
        text-align: center;
        font-size: 20px;
    }
    @media screen and (max-width : 748px){
        left: 10%;
        p{
            font-size: 18px;
        }
    }
`
export const Button = styled.button`
        background: none;
        border: 2px solid #212121;
        text-transform: uppercase;
        padding: 40px 40px;
        cursor: pointer;
        border-radius: 50% 50%;
        transition: color 0.4s linear;
        position: relative;
        overflow: hidden;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: #C32D13;
            z-index: -1;
            transition: transform 0.5s;
            transform-origin: 0 0;
            transform: scaleX(0);
            border-radius: 40%;
        }
        &:hover::before{
            transform: scaleX(1);
        }
        &:hover img{
            transform: scale(1.1);
            filter: opacity(1);
        }
    @media screen and (max-width: 748px){
        right: 10%;
    }
`