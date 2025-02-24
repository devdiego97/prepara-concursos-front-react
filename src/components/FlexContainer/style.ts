import styled from "styled-components";
import { IFlexProps } from ".";



export const Container=styled.div<IFlexProps>`
    display:flex;
    justify-content: ${props=>props.JC ? `${props.JC}` : 'flex-start'};
    align-items:${props=>props.JC ? `${props.AI}` : 'flex-start'};
    padding:${props=>props.p};
    margin:${props=>props.m};
    height:${props=>props.h ? `${props.h}px` : `${props.h}`};
    width:'100%';
    flex-direction:${props=>props.direction ? props.direction : 'auto'};

    .children-left{
        height:initial;
        width:${props=>props.WidhtLeft ? props.WidhtLeft : '100px'};
        flex: ${props=>props.flexL ? props.flexL : 'auto'};
    }
    .children-right{
        height:initial;
        width:${props=>props.WidhtLeft ? props.WidhtLeft : '100px'};
        flex: ${props=>props.flexR ? props.flexR : 'auto'};
    }
  
  
  
    @media screen and (min-width:350px)and (max-width:950px){
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        width:100%;
        .children-left{
          width:100%;
          flex:  'auto';
      }
        .children-right{
            margin: 50px 0;
            width:100%;
        }
       
    }
`