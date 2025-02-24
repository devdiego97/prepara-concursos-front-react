import { Accordion, Card, HStack,Text } from "rsuite"
import { IModule } from "../../interfaces/cursos.interface"
import { MdOutlineVideoCall as Video } from "react-icons/md"



type Props={
    module:IModule
}
export default ({module}:Props)=>{
   
    return   <Accordion  as='div' >
       <Accordion.Panel header={` ${module.name} `} eventKey={module.name}>
        {module.aulas.map(i=><Card style={{padding:'12px',margin:'8px 0'}}>
                <HStack>
                <Video color="#ddd"  />
                <Text>{i.name}</Text>
            </HStack>
        
       </Card>)}
    </Accordion.Panel>
   </Accordion>
 
}