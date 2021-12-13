import styled from "styled-components";

export const Row = styled.section`
    width: 100%;
    height: 765px;
    display: flex;
    justify-content: center;
`
export const Col = styled.div`
    width: 80%;
    height: 100%;
    position: relative;
`
export const Title = styled.div`
    position: absolute;
    top: 50px;
    & h3{
        color: #212121;
        font-size: 20px;
        font-weight: normal;
    }
`
export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    box-sizing: border-box;
    position: relative;
`
export const WrapTitle = styled.div`
    width: 50%;
    height: 80%;
    position: absolute;
    z-index: 1;
    top: 120px;
    &:hover h1{
        opacity: 0.1;
    }
`
export const TitleRecent = styled.div`
    font-size: 58px;
    transition: opacity 5s cubic-bezier(0.77, 0, 0.175, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a{
        color: #212121;
        text-decoration: none;
    }
    h1:hover{
        opacity: 1;
        cursor: pointer;
    }
`
export const WrapMedia = styled.div`
    width: 100%;
    height: 80%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const MediaRecent = styled.div`
    position: fixed;
    top: 0;
    left: -300px;
    width: 100%;
    height: 100%;
    img{
        max-width: 800px;
        height: 300px;
        opacity: 0;
        object-fit: contain;
        pointer-events: none;

        &.is-active{
            opacity: 1;
        }
    }
`