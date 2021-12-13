import styled from "styled-components";

export const Row = styled.section`
    width: 100%;
    height: 750px;
    z-index: 2;
    position: relative;
    h3{
        position: absolute;
        left: 50%;
        top : 30px;
        transform: translate(-50%);
        font-weight: normal;
        font-size: 20px;
    }
`
export const Col = styled.div`
    width: 80%;
    height: 80%;
    position: absolute;
    left: 10%;
    top: 100px;
    display: flex;
    justify-content: space-between;
`
export const ColImage = styled.div`
    display: grid;
    place-items: center;

    img:hover{
        transform: scale(1.1);
        animation: 1.5s ease-in-out;
    }
    @media screen and (max-width: 748px){
    display: inline-block;
    position: absolute;
    top: 150px;
        img{
            width: 250px;
            min-height: 100px;
        }
    }
`
export const ColAbout = styled.div`
    position: absolute;
    width: 600px;
    height: 100%;
    right: 20px;
    h2{
        margin: 10px 0 50px 0;
        line-height: 17px;
    }
    p{
        width: 400px;
        padding-top: 20px;
        line-height: 17px;
    }

    @media screen and (max-width: 748px){
        left: 0;
        h2{
            font-size: 18px;
            line-height: 14px;
            margin: 0 0 50px 0;
        }
        p{
            padding: 10px;
            margin-left: 260px;
            font-size: 16px;
            line-height: 17px;
            width: 300px;
        }
    }
`
export const Button = styled.button`
    background: none;
    border: 2px solid #212121;
    padding: 40px 40px;
    cursor: pointer;
    border-radius: 50% 50%;
    transition: color 0.4s ease-in-out;
    position: relative;
    overflow: hidden;
    margin-left: 200px;
    margin-top: 80px;
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
        border-radius: 0 50% 50% 0;
    }
        &:hover::before{
            transform: scaleX(1);
    }
    &:hover img{
        transform: scale(1.1);
    }
    
    @media screen and (max-width: 748px){
        /* margin-left: 350px; */
        position: absolute;
        bottom: 50px;
        right: 130px;
    }
`