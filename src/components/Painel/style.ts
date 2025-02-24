import styled from "styled-components"
import { GlobalStyle } from "../../App.style"

type props={
  onMobile:boolean
}


export const Container=styled.div<props>`
display:flex;
flex-direction: column;

.left{
    position: fixed;
    top: 0;
    bottom: 0;
    padding:50px 12px;
    left:0;
    width:15vw;
    box-shadow: 0 0 5px #222;
    background-color:${GlobalStyle.BgPrimary};
    .cx-img{
      display: flex;
      align-items: center;
    }
    .btn-open-mobile{
      display: none;
    }
    .nav{
      .btn-close-mobile{
          display: none;
      }
      .links{
          display: flex;
          align-items: center;
          margin: 100px 0;
          ul{
         li{
          margin: 22px 0;
           a{
              color: white;
              padding: 12px 22px;
              border-radius: 6px;
              text-decoration: none;
              transition: all ease .3s;
              &:hover{
                color: white;
                  background-color: ${GlobalStyle.BgSecondary};
              }
            }
          }
          }
      }
    }
   
}

.right{
    margin-left: 15vw;
    padding: 50px 20px;
}

@media screen and (max-width:950px) {
  flex-direction: column;
  align-items: center;


  .left{
    display: flex;
    width: 100vw;
    padding: 22px 30px;
    height: 90px;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    img{
      height: 50px;
    }
    .btn-open-mobile{
       display:${props=>!props.onMobile ? 'flex': 'none'};
       justify-content: center;
       align-items: center;
   }
    
  }

  .right{
    margin: 0;
  }

  .nav{
       position: fixed;
       height: 100vh;
       display: ${props=>props.onMobile ? 'flex': 'hidden'};
       width: ${props=>props.onMobile ? '50vw': '0'};
       transition: all ease .3s;
       top: 0;
       flex-direction: column;
       right: 0;
       z-index: 1;
       left:auto;
       bottom: 0;
       background-color: cadetblue;
     .links-menu{
        margin: 0;
        .links{
            display: ${props=>props.onMobile ? 'flex': 'none'};
            margin: 160px 0;
            flex-direction: column;
          
        }
       .btn-close-mobile{
           display:${props=>props.onMobile ? 'flex': 'none'};
           background-color: white;
           padding: 12px;
           position: absolute;
           top: 0;
           width: 100vw;
           align-items: end;
       }
   }
}
}
`
