import { Card,Image, VStack,Text, Button, HStack } from "rsuite"
import { ICurso } from "../../interfaces/cursos.interface"
import { useNavigate } from "react-router-dom"




type props={
    course:ICurso
}

export default ({course}:props)=>{
   
    const nav=useNavigate()

   

    return <Card shaded direction="row" >
        <Image src={course.cover} width={200} height={170} />
        <VStack>
            <Card.Header>
                <Text maxLines={1} weight='semibold'>{course.name}</Text>
            </Card.Header>
            <Card.Body>
                <HStack justifyContent="center" alignItems="center">
                   <Button size="lg" onClick={()=>nav(`/plataforma/${course.name}/${course.id}`)} block appearance="primary">Entrar </Button> 
                </HStack>
            </Card.Body>
        </VStack>
    </Card>
}   