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
    & h3{
        margin-top: 80px;
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
    & img{
        width: 70px;
        max-height: 70px;
        border-radius: 50%;
        position: absolute;
        left: 50px;
        top: 50px;
    }

    @media screen and (max-width: 748px){
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`
export const Container = styled.div`
    width: 100%;
    height: 100%;
`
export const Identitas = styled.div`
    margin:8px 20px;
    font-size: 20px;
    font-weight: normal;
    color: white;
    position: absolute;
    left: 120px;
    @media screen and (max-width: 748px){
        font-size: 16px;
    }
`
export const Qoute = styled.div`
    margin-left: 100px;
    width: 700px;
    position: absolute;
    right: 50px;
    & p{
        font-size: 24px;
        font-style: italic;
        color: white;
    }
    & p::before{
        content: " '' ";
        font-size: 28px;
    }
    @media screen and (max-width: 748px){
        width: 100%;
        margin-left: 0;
        left: 0;
        top: 180px;
        padding: 15px;
        p{
            font-size: 16px;
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
    &:hover{
        cursor: pointer;
    }
    @media screen and (max-width: 748px){
        right: 100px;
        padding: 30px 35px;
    }
`
export const Slider = styled.div`
    position: absolute;
    left: 48%;
    bottom: 180px;
    display: flex;
    
    @media screen and (max-width: 748px){
        left: 46%;
    }
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