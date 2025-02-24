import styled from "styled-components";
import { IGridProps } from ".";



export const Container=styled.div<IGridProps>`
    display: grid;
    grid-template-columns: repeat(${props=>props.cols},${props=>props.fr}fr);
    grid-gap:${props=>props.gap};
    padding:${props=>props.p};
    margin:${props=>props.m};

    @media screen and (max-width:950px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 20px;
        div,section{
            width: 100%;
        }
    }
`