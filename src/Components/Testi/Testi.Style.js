import Slider from "react-slick";
import styled from "styled-components";

export const Row = styled.div`
    width: 100% !important;
    height: 700px !important;
    display: flex !important;
    justify-content: center !important;
    position: relative !important;
`
export const Col = styled.div`
    width: 80% !important;
    height: 90% !important;
    
`
export const Title = styled.div`
    width: 100%;
    height: 120px;
    
    & h3{
        font-size: 20px;
        font-weight: normal;
    }
    & h2{
        margin-top: 30px;
        font-size: 28px;
    }
`
export const SlideStyle = styled(Slider)`
    background-color: #212121;
    height: 500px !important;
    padding: 50px !important;

    .slick-dots li button:before{
        font-size: 15px;
        color: #F1F0EC;
    }

    .slick-dots li {
        width: 15px;
    }

    @media screen and (max-width: 500px){
        padding: 10px !important;
    }
`
export const Item = styled.div`
    height: 100% ;
    width: 100% ;
    text-align: center;
    transition: 2s ease;
    animation: animText 0.5s ease-in;
    
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin: 10px auto;
    }
    p{
        font-size: 20px;
        font-weight: normal;
        color: white;

        &:nth-child(3){
            margin-bottom: 40px;
        }
        &:nth-child(4){
            padding: 0 40px;
        }
        &:nth-child(4)::before{
            content: " '' ";
        }
    }

    @media screen and (max-width: 768px){
        p{
            font-size: 16px;
        }
    }

    @media screen and (max-width: 500px){
        padding: 30px 0 0 0;
        p{
            font-size: 14px;

            &:nth-child(3){
                margin-bottom: 40px;
            }
            &:nth-child(4){
                padding: 0 ;
            }
        }
    }
`
export const Button = styled.div`
    img{
        height: 35px;
        width: 35px;
    }

    @media screen and (max-width: 500px){
        img{
            display: none;
        }
    }
`