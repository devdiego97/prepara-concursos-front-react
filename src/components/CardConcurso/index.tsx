import { Button, Card,HStack,Image,Tag,Text} from "rsuite"
import { useLocation, useNavigate } from "react-router-dom"
import { IConcurso } from "../../interfaces/concursos.interface"

type Props={
    concurso:IConcurso
}
export default ({concurso}:Props)=>{
   const nav=useNavigate()
   const location=useLocation()


    return <Card>
        <Image height={250}  src={concurso.cover} alt="imagem da capa" />
        <Card.Header>
            <Text weight="semibold" style={{height:'80px'}} maxLines={2}>{concurso.name}</Text>
        </Card.Header>
        <Card.Body style={{margin:'10px 0',height:'20px 0'}}>
            <HStack  justifyContent="space-around">
                <Tag size="lg" color='blue'>{concurso.status}</Tag>
                <Tag size="lg" color="green">{concurso.abrangency}</Tag>
            </HStack>
        </Card.Body>
        <Card.Footer style={{padding:'50px'}}>
               {!location.pathname.includes('/admin/') ? <Button onClick={()=>nav(`/concursos/${concurso.name}/${concurso.id}`)} 
               size="lg" block appearance="primary">ver concurso</Button> :
               <Button onClick={()=>nav(`/admin/concursos/${concurso.name}/${concurso.id}`)} 
               size="lg" block appearance="primary">ver concurso</Button>
               }
        </Card.Footer>
    </Card>
}