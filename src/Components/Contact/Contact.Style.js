import styled from "styled-components";

export const Row = styled.section`
    width: 100%;
    height: 750px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`
export const ColHeader = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    h3{
        font-size: 20px;
        color: #212121;
        font-weight: normal;
    }
    h2{
        margin-top: 30px;
        font-weight: bold;
        font-size: 28px;
        color: #212121;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        h2{
            font-size: 24px;
        }
    }

    @media screen and (max-width: 500px){
        h2{
            font-size: 20px;
        }
    }
`
export const ColBody = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const ColGroup = styled.div`
    width: 80%;
    /* height: 60vh; */
    height: 430px;
    position: absolute;
    top: 5px;
    padding: 50px;
    background-color: #212121;
    border-radius: 6px;

    @media screen and (max-width: 748px){
        padding: 20px;
    }
`
export const TextInput = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 748px){
        flex-direction: column;
    }
    
`
export const Input = styled.div`
    border: none;
    position: relative;
    /* width: 350px; */
    width: 48%;
    height: 60px;
    margin-bottom: 20px;
    border-bottom: 2px solid #F1F0EC;
    
    input{
        display: block;
        width: 100%;
        height: 100%;
        font-size: 16px;
        padding: 0 5px;
        background-color: #212121;
        border: none;
        outline: none;
        color: #F1F0EC;
        &:focus ~ label,
        &:valid ~ label{
            color: grey;
            transform: translateY(-20px);
            font-size: 14px;
        } 
    }

    @media screen and (max-width: 748px){
        margin: 0;
        width: 100%;
        input{
            font-size: 14px;
        }
    }

    label{
        pointer-events: none;
        font-size: 16px;
        position: absolute;
        bottom: 20px;
        left: 5px;
        transition: all ease-in-out 0.3s;
        color: #F1F0EC;

        @media screen and (max-width: 748px){
            font-size: 14px;
        }
    }

`
export const InputForm = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: 80px;
    border-bottom: 2px solid #F1F0EC;
    textarea{
        width: 100%;
        height: 100%;
        padding: 20px 5px;
        display: block;
        border: none;
        outline: none;
        background-color: #212121;
        color: white;
        &:focus ~ label,
        &:valid ~ label{
            transform: translateY(-20px);
            color: grey;
            font-size: 14px;
        }
    }
    label{
        position: absolute;
        bottom: 40px;
        left: 5px;
        pointer-events: none;
        transition: all ease-in-out 0.3s;
        color: #F1F0EC;
    }
`
export const Button = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    margin-top: 30px;
    input{
        padding: 20px 40px;
        font-size: 16px;
        border-radius: 4px;
        border: none;
        background-color: #F1F0EC;
        color: #212121;
        font-weight: bold;
        &:hover{
            cursor: pointer;
        }
    }

    @media screen and (max-width: 748px){
        margin-top: 15px;
        input{
            padding: 15px 35px;
            font-size: 14px;
        }
    }
`
export const InputGroup = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 50px;

    @media screen and (max-width: 948px){
        width: 100%;
    }
`
export const Address = styled.div`
    display: grid;
    place-items: center;
    color: #212121;
    font-size: 14px;
    img{
        margin-bottom: 10px;
        &:hover{
            transform: scale(1.1);
            cursor: pointer;
        }
    }

    @media screen and (max-width: 748px){
        font-size: 12px;
    }
`