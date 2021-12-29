import styled from "styled-components";

export const Row = styled.section`
    width: 100%;
    height: 770px;
    position: relative;
`
export const Col = styled.div`
    width: 80%;
    left: 10%;
    height: 140px;
    color: #212121;
    position: relative;
    padding: 30px 0;

    & h3{
        font-size: 20px;
        font-weight: normal;
    }
    & h2{
        margin-top: 20px;
        letter-spacing: 1px;
        font-size: 28px;
    }
`
export const Caraosel = styled.div`
    position: relative;
    width: 80%;
    height: 500px;
    left: 10%;
    display: flex;
    justify-content: space-between;
    background-color: #212121;
    z-index: 1;
`
export const Content = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 5px;
    transition-delay: 5s;
    padding: 50px 50px;
    transition: 2s ease;
    animation: animText 0.5s ease-in;

    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`
export const Container = styled.div`
    width: 100%;
    height: 100%;
`
export const TitleHero = styled.div`
    width: 100%;
    height: 100px;
    position: relative;
    display: flex;
    justify-content: center;
    & img{
        width: 70px;
        max-height: 70px;
        border-radius: 50%;
        position: absolute;
    }
`
export const Identitas = styled.div`
    font-size: 20px;
    font-weight: normal;
    color: white;
    position: absolute;
    top: 80px;
    text-align: center;
    @media screen and (max-width: 768px){
        font-size: 16px;
    }
`
export const Qoute = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    top: 200px;
    padding: 20px 50px;
    text-align: center;
    & p{
        font-size: 20px;
        font-style: italic;
        color: white;
    }
    & p::before{
        content: " '' ";
        font-size: 28px;
    }
    @media screen and (max-width: 768px){
        width: 100%;
        margin-left: 0;
        left: 0;
        top: 180px;
        padding: 15px;
        p{
            font-size: 16px;
        }
    }
    @media screen and (max-width: 500px){
        p{
            font-size: 14px;
        }
    }   
`
export const Button = styled.button`
    padding: 35px 40px;
    border-radius: 50%;
    position: absolute;
    background-color: #F1F0EC;
    border: none;
    right: 200px;
    bottom: 150px;
    z-index: 10;
    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 768px){
        right: 100px;
        padding: 30px 35px;
    }
    @media screen and (max-width: 500px){
        right: 80px;
        padding: 30px 35px;
    }
`
export const Slider = styled.div`
    width: 100%;
    position: absolute;
    bottom: 180px;
`
export const Shift = styled.div`
    display: flex;
    justify-content: center;
`
export const Indikator = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #fff;
    margin-right: 3px;

    &.active{
        width: 30px;
        transition: all 0.3s ease-in-out;
    }
`