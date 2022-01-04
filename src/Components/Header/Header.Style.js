import styled from "styled-components";

export const Headers = styled.section`
    width: 100%;
    height: 800px;
    z-index: 10;
    position: relative;
    display: grid;
    place-items: center;

    @media screen and (max-width: 500px){
        height: 730px;
    }

    @media screen and (max-width: 376px){
        height: 650px;
    }
`
export const Box = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    z-index: -1;
    background-color: #F1F0EC;
    &::after{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        backdrop-filter: blur(70px);
    }
`
export const BoxOne = styled.div`
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    border: none;
    top: 10%;
    left: 10%;
    background-color: #D3BC8A;
    animation: animation linear 20s infinite alternate;
    animation-delay: 0.5s;
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const BoxTwo = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: none;
    bottom: 20%;
    right: 10%;
    background-color: #5F61A0;
    animation: animation1 20s infinite alternate;
    animation-delay: 0.3s;
    @media screen and (max-width: 768px){
        display: none;
    }
`
export const BoxThree = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    border: none;
    top: 10%;
    left: 10%;
    background-color: #D3bc8a;
    animation: animation2 linear 10s infinite alternate;
    animation-delay: 0.5s;
    @media screen and (max-width: 768px){
        display: none;
    }
`
// export const Box = styled.div`
//     width: 100%;
//     height: 3000px;
//     position: relative;
//     background-color: #DDDBD7;
//     &:after{
//         position: absolute;
//         content: "";
//         height: 100%;
//         width: 100%;
//         backdrop-filter: blur(70px);
//     }
// `
// export const BoxOne = styled.div`
//     height: 100%;
//     width: 100%;
//     background-color: #F1F0EC;
//     position: absolute;
// `
// export const BoxTwo = styled.div`
//     position: absolute;
//     height: 350px;
//     width: 350px;
//     background-color: #D3BC8A;
//     top: 80px;
//     left: 100px;
//     border-radius: 50%;
//     animation: animation linear 20s infinite alternate;
//     animation-delay: 0.3s;

//     @media screen and (max-width : 768px){
//         display: none;
//     }
// `
// export const BoxThree = styled.div`
//     position: absolute;
//     height: 100px;
//     width: 100px;
//     background-color: #5F61A0;
//     right: 20px;
//     top: 650px;
//     border-radius: 50%;
//     animation: animation1 10s infinite alternate;

//     @media screen and (max-width : 768px){
//         display: none;
//     }
// `
// export const BoxFour = styled.div`
//     position: absolute;
//     height: 300px;
//     width: 300px;
//     background-color: #D3BC8A;
//     top: 50%;
//     left: 0;
//     border-radius: 48%;
//     animation: animation2 10s infinite alternate;

//     @media screen and (max-width : 768px){
//         display: none;
//     }
// `

export const Head = styled.div`
    width: 80%;
    height: 100%;
    flex-direction: column;
    align-content: space-around;
    position: absolute;
    z-index: 1;
    @media screen and (max-width: 500px){
        width: 90%;
    }
`
export const Home = styled.div`
    width: 100%;
    height: 600px;
    display: grid;
    place-items: center;
    margin-top: 50px;
`
export const ColHome = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    h1{
        position: absolute;
        font-size: 6.8vw;
        font-weight: normal;
        color: #212121;
    }

    img{
        width: 350px;
        min-height: 100px;
        position: absolute;
        right: 0;
        opacity: 0.3;
    }

    @media screen and (max-width: 500px){
        h1{
            bottom: 200px;
        }

        img{
            object-fit: contain;
            width: 100%;
            bottom: 50px;
        }
    }
`
export const ColLabel = styled.div`
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: 0;
`
export const Label = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    p{
        margin-right: 25px;
        color: #000;
        text-align: center;
        font-size: 18px;
    }

    @media screen and (max-width: 768px){
        p{
            font-size: 14px;
            margin-bottom: 10px;
        }
    }

    @media screen and (max-width: 500px){
        flex-direction: column;
        p{
            font-size: 14px;
            margin-bottom: 10px;
        }
    }
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