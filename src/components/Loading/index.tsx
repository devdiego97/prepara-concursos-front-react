import { OrbitProgress } from "react-loading-indicators"
import { HStack,Text } from "rsuite"


type props={
    color:string,
    text:string,
    size:'small' | 'large' | 'medium'
    textColor?:string
}

export default ({color,text,textColor,size}:props)=>{
    return  <HStack>
      <OrbitProgress color={color} size={size}  textColor={textColor} />
      <Text as='h4' weight="medium" style={{color:`${color}`}} >{text}</Text>
 </HStack>
}

