import { HStack } from "rsuite"
import { GlobalStyle } from "../../App.style"
import FlexContainer from "../FlexContainer"


export default ()=>{
    return <FlexContainer JC="center"  AI="center" style={{height:'300px',background:`${GlobalStyle.BgPrimary}`}}>
       <HStack>
       <p style={{fontSize:'19px'}} color="red">Desenvolvido por <a target="_" href=''>@Diego Morais</a></p>
       </HStack>
    </FlexContainer>
}