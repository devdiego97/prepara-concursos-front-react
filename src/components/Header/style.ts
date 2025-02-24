import styled from "styled-components";
import { GlobalStyle } from "../../App.style";


type props={
    onMobile:boolean
}
export const Nav=styled.nav<props>`

.btn-open-mobile{
    display: none;
}
.btn-close-mobile{
    display: none;
}
.links{
    display: flex;
    align-items: center;
    a{
        font-size: 16px;
        color: white;
        font-weight: 800;
        padding: 12px 22px;
        border-radius: 6px;
        text-decoration: none;
        margin: 0 12px;
        transition: all ease .3s;
        &:hover{
            color: #C4CC2E;
            background-color: ${GlobalStyle.BgSecondary};
        }
    }
}



@media screen and (max-width:950px) {
   
    .btn-open-mobile{
        display:${props=>!props.onMobile ? 'flex': 'none'};
        justify-content: center;
        align-items: center;
    }
    .links-menu{
        z-index: 1;
        position: fixed;
        height: 100vh;
        display: ${props=>props.onMobile ? 'flex': 'hidden'};
        width: ${props=>props.onMobile ? '50vw': '0'};
        transition: all ease .3s;
        top: 0;
        flex-direction: column;
        right: 0;
        bottom: 0;
        background-color: cadetblue;
        .links{
            display: ${props=>props.onMobile ? 'flex': 'none'};
            margin: 100px 0;
            flex-direction: column;
          
        }
        .btn-close-mobile{
            display:${props=>props.onMobile ? 'flex': 'none'};
            background-color: white;
            padding: 12px;
            align-items: end;
        }
    }
}

`